function Santri(props) {
  return (
    <>
      <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
        <p>========================</p>
        <p>Nama : {props.nama}</p>
        <p>Kelas : {props.kelas}</p>
        <p>Hobi : {props.hobi}</p>
        <p>Status : {props.aktif ? "Aktif" : "Tidak Aktif"}</p>
        
        <p>========================</p>
      </div>
    </>
  );
}