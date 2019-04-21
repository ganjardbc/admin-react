import React, { Component } from 'react'

class Contents extends Component {
  render() {
    return (
      <div className="main-content">
        
        <div className="display-flex padding-15px">
          <div className="grid grid-2x grid-mobile-none">
              <div className="col-1">
                  <div className="txt-site txt-18 txt-bold txt-main margin-top-5px margin-bottom-5px">
                    Component Pages
                  </div>
              </div>
              <div className="col-2 content-right">
                  <form action="#" className="width width-full">
                      <div className="display-flex background-dark-grey border-radius">
                          <select 
                            name="search" 
                            className="slc slc-primary"
                            required>
                              <option value="val">Urutkan</option>
                              <option value="val1">Val 1</option>
                              <option value="val1">Val 1</option>
                              <option value="val1">Val 1</option>
                          </select>

                          <input 
                            type="text" 
                            className="txt txt-main-color txt-primary-color" 
                            placeholder="Masukan kata kunci"
                            required></input>
                                        
                          <button 
                            className="btn btn-blue btn-no-radius"
                            type="submit">
                            Cari
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        </div>

        <div className="display-flex">
          <table>
            <thead className="background-blue">
              <th width="80">No</th>
              <th>Content 1</th>
              <th className="app-desktop">Content 2</th>
              <th className="app-desktop">Content 3</th>
              <th className="app-desktop">Content 4</th>
              <th width="200">Actions</th>
            </thead>
            <tbody>
              { this.createTableContents() }
            </tbody>
          </table>
        </div>

        <div className="display-flex padding-bottom-20px">
          <div className="width width-all padding-15px">
            <div className="grid grid-2x">
              <div className="col-1">
                <ul className="link link-pos">
                  <li>
                    <a href="/#">
                      <i className="fa fa-lg fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <div className="val">
                      5 / 15
                    </div>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-lg fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-2 content-right">
                <div className="txt-site txt-main txt-11 post-center">
                  [221 - 223 / 223]
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }

  createTableContents = () => {
    let dt = []

    for (let i = 0; i < 10; i++) {
      dt.push(
        <tr>
          <td>
            <strong>{i + 1 }</strong>
          </td>
          <td>1</td>
          <td className="app-desktop">2</td>
          <td className="app-desktop">3</td>
          <td className="app-desktop">4</td>
          <td>
            <button className="btn btn-green btn-small icn">
              <i className="fa fa-lw fa-pencil-alt"></i>
            </button>
            <button className="btn btn-red btn-small icn">
              <i className="fa fa-lw fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      )
    }

    return dt
  }

}

export default Contents