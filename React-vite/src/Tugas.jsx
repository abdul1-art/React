import { useRef, useState } from "react";

function Tugas() {
  const [nama, setNama] = useState("");
  const inputRef = useRef(null);
  const tampilkanNama = () => {
    setNama(inputRef.current.value);
  }
  return (
    <div>
      <h1>Tugas Praktik useRef dan useState</h1>

      <input type="text" ref={inputRef} placeholder="Masukkan nama" />

      <button onClick={tampilkanNama}>Tampilkan Nama</button>

      <h2>Nama: {nama}</h2>
    </div>
  );
}

export default Tugas;
