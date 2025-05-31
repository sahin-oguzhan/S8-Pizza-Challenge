export default function OrderTotal({
  pizza,
  formData,
  color1,
  color2,
  color3,
}) {
  return (
    <section className="order-text">
      <div className="sip-toplam">
        <h5 style={{ color: color1, fontWeight: 'bold' }}>Sipariş Toplamı</h5>
      </div>
      <div className="sip">
        <h6 style={{ color: color2 }}>
          Seçimler {formData.ekstra.length * 5 * formData.adet}TL
        </h6>
        <h6 style={{ color: color3 }}>
          Toplam{' '}
          {(Number(pizza.fiyat) + formData.ekstra.length * 5) * formData.adet}
          TL
        </h6>
      </div>
    </section>
  );
}
