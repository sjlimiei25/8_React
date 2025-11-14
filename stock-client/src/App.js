import './App.css';
import { useState, useEffect } from 'react';

import { getStockByName } from './services/stockService';

function App() {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(null);
  const [error, setError] = useState('');


  const searchHandler = async () => {
    const data = await getStockByName(name);

    if (data.error) {
      // 오류 메시지가 응답된 경우
      setError(data.error);

      setStock(null);   // 초기화
    } else {
      // 주식 종목으로 데이터가 응답된 경우
      setStock(data);

      setError('');     // 초기화
    }

  }

  return (
    <div>
      <h1>STOCK WEB CLIENT</h1>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='종목명을 입력하세요' />
      <button onClick={searchHandler}>검색</button>

      {
        error && <p style={{color:'red'}}>{error}</p>
      }
      
      {
        stock &&
        <table>
          <tr>
            <th>종목명</th>
            <td>{stock.name}</td>
          </tr>
          <tr>
            <th>코드</th>
            <td>{stock.code}</td>
          </tr>
          <tr>
            <th>현재가</th>
            <td>{stock.price}</td>
          </tr>
          <tr>
            <th>시가총액</th>
            {/* <td>{stock.market_sum} (억)</td> */}
            <td>{stock.marketCap} (억)</td>
          </tr>
        </table>
      }

    </div>
  );
}

export default App;
