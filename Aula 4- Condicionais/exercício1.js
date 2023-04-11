const valorDaCompra = 100;
const numeroDeParcelas= 2;

if(numeroDeParcelas === 1){
    const desconto= valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
   console.log(`Você deve pagar R$ ${valorAPagar} , pois à vista tem 10% de desconto}`)
}else{
    const valorDaParcela = valorDaCompra / numeroDeParcelas
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)

}


