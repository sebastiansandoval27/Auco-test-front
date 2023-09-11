'use client'
import LayoutComp from '@/components/basic/LayoutComp'
import Image from 'next/image'
import React from 'react'

const Personal = () => {
  console.log('Personal');
  
  return (
    <LayoutComp>
      <div className="w-full flex flex-col items-center justify-center p-3 lg:w-2/3 pb-20">
        <h3>Juan Sebastian Sandoval Sierra</h3>
        <span className="text-stone-400">Software Developer</span>
        <hr className="w-full border-t-2 border-stone-500 border-opacity-40 my-4" />
        <h3 className="font-extrabold text-lg text-primary-dark">
          Mi proyección en <strong>Auco.ai</strong>
        </h3>
        <p className="mt-2 text-stone-700">
          Una de mis principales metas desde que ingresé al fascinante mundo del
          desarrollo de software ha sido destacar por mis capacidades, creando
          productos con un impacto positivo en la sociedad. Aspiro a desarrollar
          soluciones que optimicen procesos y que sean accesibles para un
          público diverso.
        </p>
        <p className="mt-2 text-stone-700">
          En cada una de mis experiencias laborales previas, he entregado un
          esfuerzo y dedicación que superan el 100% en cada tarea. Esta actitud
          me ha permitido llevar a cabo proyectos significativos con éxito. Esta
          determinación se alinea siempre con los objetivos de la empresa y la
          visión del producto.
        </p>
        <p className="mt-2 text-stone-700">
          Mi sueño y objetivo principal es continuar creciendo como profesional,
          demostrando siempre mi pasión por la creación de proyectos y
          asegurando que las personas sientan que su inversión ha valido la
          pena.
        </p>
        <div className="w-full h-52 flex justify-center items-center my-3">
          <Image
            src="/photo2.webp"
            alt="Juan Sebastian Sandoval Sierra"
            width={300}
            height={300}
          />
        </div>
        <h3 className="text-xl text-primary-dark px-2 w-full flex justify-center items-center my-3 border-2 border-primary-dark py-3 rounded-md">
          ¿Qué aportaré a Auco.ai?
        </h3>
        <p className="mt-3">
          Sin lugar a dudas, puedo afirmar que siempre entrego el 100% de mi
          capacidad y compromiso en cada proyecto en el que participo. Mi firme
          convicción es que la excelencia solo se alcanza cuando se da todo de
          sí mismo, y esta es una filosofía que aplico constantemente en mi
          trabajo como desarrollador de React JS. Una de mis fortalezas radica
          en mi habilidad para crear interfaces cautivadoras que atraen a las
          personas.
        </p>
        <hr className="w-full h-2 bg-transparent border-none mt-2" />
        <p>
          Considero que el diseño de la interfaz es una parte esencial en la
          experiencia del usuario, y me enorgullece poder combinar mi destreza
          técnica con mi creatividad para lograr resultados visualmente
          atractivos y funcionales.
        </p>
        <hr className="w-full h-2 bg-transparent border-none mt-2" />
        <p>
          Por tanto, aquellos que trabajen conmigo pueden tener la certeza de
          que no solo recibirán un desarrollador comprometido y apasionado, sino
          también alguien capaz de elevar la calidad de los proyectos gracias a
          mi enfoque en el diseño de interfaces que no solo cumplan, sino que
          superen las expectativas del público.
        </p>
        <h3 className="w-full mt-3 text-blue-600 text-xl font-extrabold text-center">
          Estoy completamente seguro de que con mi trabajo lograremos resultados
          increibles {`:)`}
        </h3>
      </div>
    </LayoutComp>
  )
}

export default Personal
