import React, { Component } from 'react';
import axios from '../../lib/gbm-axios/gbm-axios';
import Loader from '../../components/loader/Loader';
import Header from '../../components/header/Header';
import CheckAuthorization from '../../components/auth/CheckAuthorization';

/**
 * HAndle the IPC page
 */
class Ipc extends Component {
  state = {
    IpcHistory: null,
    showLoader: true
  }

  componentDidMount() {
    // Original ULR https://www.gbm.com.mx/Mercados/ObtenerDatosGrafico?empresa=IPC
    // Problem with control access (CORS)
    axios.get(' http://www.mocky.io/v2/5bc20e09320000530021acc8')
      .then((response) => {
        console.log(response.data.resultObj);
        this.setState({
          IpcHistory: response.data.resultObj,
          showLoader: false
        });
      })
      .catch(() => {
        this.setState({
          showErrorSection: true,
          showLoader: false
        });
      });
  }

  render() {
    const { IpcHistory, showLoader, showErrorSection } = this.state;
    return (
      <div className="ipc">
        <Header>
          <h1>
            Índice de Precios y Cotizaciones.
          </h1>
        </Header>

        {showLoader && (
          <Loader />
        )}
        {showErrorSection && (
          <h2>
            An error has ocurred
          </h2>
        )}

        {IpcHistory && (
          <table className="ipc-data">
            <thead>
              <tr>
                <th>
                  Fecha
                </th>
                <th>
                  Porcentaje
                </th>
                <th>
                  Precio
                </th>
                <th>
                  Volumen
                </th>
              </tr>
            </thead>
            <tbody>
              {IpcHistory.map(row => (
                <tr>
                  <td>
                    {row.Fecha}
                  </td>
                  <td>
                    {row.Porcentaje}
                  </td>
                  <td>
                    {row.Precio}
                  </td>
                  <td>
                    {row.Volumen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default CheckAuthorization(Ipc);
