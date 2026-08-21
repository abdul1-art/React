import Hero from "./components/Hero";
import ProfilPengguna from "./ProfilPengguna"
import { useState } from "react";
import React from "react";
import { students } from "./data";
import './App.css'
import { useRef } from "react";
import Tugas from "./Tugas";
 function App() {
  return (
    <>
    <ProfilPengguna
    nama="albar"
    role="student"
    />
    <ProfilPengguna
    nama="iman"
    role="student"
    />
    </>

  )
  return(
    <>
    {students.map((student) => (
      <ProfilPengguna
        key={student.id}
        nama={student.nama}
        role={student.role}
      />
    ))}
    </>
  )

  if (students.length === 0) {
    return <div>tidak ada data</div>
  }

  return (
    (students.length === 0) ? (
      <h1>tidak ada data</h1>
    ) : (
      <>
      {students.map((student) => (
        <profilPengguna
          key={student.id}
          nama={student.nama}
          role={student.role}
        />
      ))}
      <button/>
      </>
    )
  )
 }

 export default App