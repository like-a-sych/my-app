export default function Cities() {
  return (
    <div className="main__content">
      <div class="main__inner citites">
        <form class="cities__insert input-block">
          <input
            id="city"
            type="text"
            class="input-block__input"
            placeholder="Введите название города"
          />
          <input
            id="adress"
            type="text"
            class="input-block__input"
            placeholder="Введите адрес"
          />
          <button class="input-block__button" type="button">
            Добавить город
          </button>
        </form>
        <div class="citites__content table-block">
          <table class="table-block__wrapper">
            <thead>
              <tr class="table-block__header">
                <th>Город</th>
                <th colspan="2">Адрес</th>
              </tr>
            </thead>
            <tbody class="table-block__table">
              <tr class="table-block__item">
                <td class="table-block__city">Краснодар</td>
                <td class="table-block__street">ул. Красная, 180, офис 112</td>
                <td class="table-block__recycle">
                  <button class="delete" type="button"></button>
                </td>
              </tr>
              <tr class="table-block__item">
                <td class="table-block__city">Пятигорск</td>
                <td class="table-block__street">ул. Университетская, 28</td>
                <td class="table-block__recycle">
                  <button class="delete" type="button"></button>
                </td>
              </tr>
              <tr class="table-block__item">
                <td class="table-block__city">Волгоград</td>
                <td class="table-block__street">
                  ул. Академическая, 22 Бизнес-центр Locus, офис 313
                </td>
                <td class="table-block__recycle">
                  <button class="delete" type="button"></button>
                </td>
              </tr>
              <tr class="table-block__item">
                <td class="table-block__city">Сочи</td>
                <td class="table-block__street">
                  ул. Роз, 117, Бизнес-центр Roz117, офис 403
                </td>
                <td class="table-block__recycle">
                  <button class="delete" type="button"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
