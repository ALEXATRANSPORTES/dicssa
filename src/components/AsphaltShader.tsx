"use client";

import { useEffect, useRef } from "react";

export default function AsphaltShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL no soportado.");
      return;
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader: texturizado de asfalto procedural con grano y brillo de mouse
    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_scroll;
      uniform vec2 u_mouse;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(
          mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
          mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x),
          u.y
        );
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Coordenadas con escala e inercia del scroll
        vec2 st = gl_FragCoord.xy * 0.25;
        st.y += u_scroll * 0.2;
        
        // Ruido fractal para simular irregularidades de asfalto
        float n = noise(st) * 0.08;
        n += noise(st * 2.0) * 0.04;
        n += noise(st * 4.0) * 0.02;
        
        // Color base gris asfalto oscuro
        vec3 color = vec3(0.06, 0.06, 0.06) + vec3(n);
        
        // Agregar textura fina de grano
        float grain = hash(gl_FragCoord.xy + fract(u_time)) * 0.035;
        color += vec3(grain);
        
        // Efecto linterna / Iluminación del mouse (luz amarilla cálida)
        vec2 mousePos = u_mouse;
        mousePos.y = u_resolution.y - mousePos.y; // Invertir Y para WebGL
        
        float dist = distance(gl_FragCoord.xy, mousePos);
        float lightIntensity = smoothstep(220.0, 0.0, dist);
        
        // Iluminación amarilla vial sutil
        vec3 lightColor = vec3(0.96, 0.77, 0.09) * 0.12 * lightIntensity;
        color += lightColor;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Helper para compilar shaders
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Error compilando shader:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Error linkeando programa:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Buffers de posición (un plano a pantalla completa)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Obtener locaciones de uniformes
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uScroll = gl.getUniformLocation(program, "u_scroll");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let animationFrameId: number;
    let scrollVal = 0;
    const mouseVal = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseVal.x = e.clientX;
      mouseVal.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Track scroll
    const handleScroll = () => {
      scrollVal = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let startTime = Date.now();

    const render = () => {
      if (!canvas || !gl) return;

      const elapsed = (Date.now() - startTime) / 1000.0;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uScroll, scrollVal);
      gl.uniform2f(uMouse, mouseVal.x, mouseVal.y);

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 opacity-[0.92]"
    />
  );
}
