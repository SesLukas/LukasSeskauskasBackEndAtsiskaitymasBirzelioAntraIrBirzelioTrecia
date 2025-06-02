import { useState } from 'react';
import './FilterForm.css';

const FilterForm = ({ setQueryString }) => {
  const [yearGte, setYearGte] = useState('');
  const [yearLte, setYearLte] = useState('');
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (yearGte) params.append('year_gte', yearGte);
    if (yearLte) params.append('year_lte', yearLte);
    if (inStock) params.append('inStock', 'true');
    if (sort) params.append('sort', sort);

    setQueryString(`?${params.toString()}`);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
 <div>
  <label>Metai nuo:</label>
  <input
  type="number"
  min="1850"
  max={new Date().getFullYear()}
  value={yearGte}
  onChange={(e) => setYearGte(e.target.value)}
/>

</div>
<div>
  <label>Metai iki:</label>
  <input
  type="number"
  min="1950"
  max={new Date().getFullYear()}
  value={yearLte}
  onChange={(e) => setYearLte(e.target.value)}
/>
</div>
      <div>
        <label>
          <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
          Tik turimos knygos
        </label>
      </div>
      <div>
        <label>Rikiuoti pagal reitingą:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">---</option>
          <option value="asc">Didėjančiai</option>
          <option value="desc">Mažėjančiai</option>
        </select>
      </div>
      <button type="submit">Filtruoti</button>
    </form>
  );
};

export default FilterForm;
