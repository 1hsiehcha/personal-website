import React, { useState } from 'react';
import './education.css';

const Education = (props) => {
  const [click, updateClick] = useState(false);

  return (
    <div className="charles__education">
      <div className="charles__education__container">
        <div className="charles__education__container-center_aligned">
          <img src={props.image} alt={props.image_alt}/>
          <h2>{props.school_name}</h2>
        </div>

        <div className="charles__education__container-left_aligned">
          <p>{props.description}</p>
        </div>
      </div>

      {props.button !== "N/A" && (
        <div className='charles__education__button'>
          <h5 onClick={() => updateClick(!click)}>
            {click ? <span><p>Show Less</p></span> : <span><p>Click to Show More</p></span>}
          </h5>

          {click && (
            <h3>{props.button}</h3>
          )}
        </div>
      )}

      {props.table3 !== "N/A" && (
        <div className='charles__education__table-container'>
          {props.table3.map((entry, index) => (
            <h2>
              {entry.title}
            </h2>
          ))}

          <table className='charles__education__table-format'>
            <thead>
              {props.table3.map((entry, index) => (
                <tr>
                  <th><p>{entry.headerOne}</p></th>
                  <th><p>{entry.headerTwo}</p></th>
                  <th><p>{entry.headerThree}</p></th>
                </tr>
              ))}
            </thead>

            <tbody>
              {props.table3.map((entry, index) => (
                <tr>
                  <td>{entry.first}</td>
                  <td>{entry.second}</td>
                  <td>{entry.third}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {props.table2 !== "N/A" && (
        <div className='charles__education__table-container'>
          {props.table2.map((entry, index) => (
            <h2>
              {entry.title}
            </h2>
          ))}

          <table className='charles__education__table-format'>
            <thead>
              {props.table2.map((entry, index) => (
                <tr>
                  <th><p>{entry.headerOne}</p></th>
                  <th><p>{entry.headerTwo}</p></th>
                </tr>
              ))}
            </thead>

            <tbody>
              {props.table2.map((entry, index) => (
                <tr>
                  <td>{entry.first}</td>
                  <td>{entry.second}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {props.table1 !== "N/A" && (
        <div className='charles__education__table-container'>
          {props.table1.map((entry, index) => (
            <h2>
              {entry.title}
            </h2>
          ))}

          <table className='charles__education__table-format'>
            <thead>
              {props.table1.map((entry, index) => (
                <tr>
                  <th><p>{entry.headerOne}</p></th>
                  <th><p>{entry.headerTwo}</p></th>
                </tr>
              ))}
            </thead>

            <tbody>
              {props.table1.map((entry, index) => (
                <tr>
                  <td>{entry.first}</td>
                  <td>{entry.second}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {props.table4 !== "N/A" && (
        <div>
          <table>
            <thead>
              {props.table4.map((entry, index) => (
                <tr>
                  <th>{entry.headerOne}</th>
                  <th>{entry.headerTwo}</th>
                </tr>
              ))}
            </thead>

            <tbody>
              {props.table4.map((entry, index) => (
                <tr>
                  <td>
                    {entry.first}
                  </td>
                  <td>
                    {entry.second}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>    
  )
}

export default Education