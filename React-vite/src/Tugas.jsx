import { useRef, useState } from "react";

function Tugas() {
  const [nama, setNama] = useState("");
  const inputRef = useRef(null);
  const tampilkanNama = () => {
    setNama(inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Masukkan nama" />
      <button onClick={tampilkanNama}>Tampilkan Nama</button>
      <h2>Nama: {nama}</h2>
    </div>
  );
}

export default Tugas;
