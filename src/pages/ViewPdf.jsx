const ViewPdf = ({ruta,nombre}) => {
    return (
      <div>
        <div className="w-9/12">
        <h3 className="flex justify-center text-2xl text-cyan-950 py-5" >Cronograma de {nombre} </h3>
        </div>
        <embed src={ruta} type="application/pdf" width="75%" height="510px"  />  
      </div>
    );
  }
  export default ViewPdf;