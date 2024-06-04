import React from 'react'
import styles from './Select.module.css'
import { Button, Menu, Dropdown, Space } from 'antd';
import { MdOutlineMoreVert } from "react-icons/md";
import AOS from "aos";

 export default function SelectLang() {
  const Cplus = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>C++</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const Go = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>GO</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const Java = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>Java</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const Swift = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>Swift</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const PHP = (
    <Menu
      className={styles.DropDownPHP}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>PHP</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const Python = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>Python</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const CLang = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>C</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const JavaSc = (
    <Menu
      className={styles.DropDownJs}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>JavaScript</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const SQL = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>SQL</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  const CSharp = (
    <Menu
      className={styles.DropDownCplus}
      items={[
        {
          key: '1',

          label: (
            <div className={styles.MenuLangAbout}>
              <div className={styles.MenuLangText}>
                <p>C#</p>
                <p><MdOutlineMoreVert /></p>
              </div>
              <div className={styles.MenuLangInfo}>
                <div>1. 1979-yilda yaratilgan</div>
                <div>2. Asosan obyektga yunaltirilgan</div>
                <div>3. 10 mln aktiv foydanluvchiga ega</div>
              </div>

            </div>
          ),
        },
      ]}
    />
  );
  AOS.init({
    duration: 1000
  });
  return (
    <div className={styles.Container}>
      <div className={styles.Main} data-aos="fade-up">

        <div className={styles.Text}>
          O’zingizga mos
          IT yo’nalishini tanlang
        </div>
        <div className={styles.CircleGroup}>


          <div className={styles.ItemsCircle}>

            <div className={styles.BigCircle}>
              <p className={styles.BP1}></p>
              <p className={styles.BP2}></p>

              <div className={styles.MediumCircle}>
                <p className={styles.MP1}></p>
                <p className={styles.MP2}></p>
                <div className={styles.Sqlplus}>
                  <Dropdown
                    overlay={SQL}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        SQL
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.Java}>
                  <Dropdown
                    overlay={Java}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        Java
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.PHP}>
                  <Dropdown
                    overlay={PHP}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        PHP
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.SmallCircle}>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <div className={styles.Cplus}>

                    <Dropdown
                      overlay={Cplus}
                      placement="bottom"
                    >
                      <Space>
                        <div>
                          C++
                        </div>
                      </Space>
                    </Dropdown>

                  </div>
                </div>
                <div className={styles.GO}>
                  <Dropdown
                    overlay={Go}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        GO
                      </div>
                    </Space>
                  </Dropdown>

                </div>
                <div className={styles.JavaSc}>
                  <Dropdown
                    overlay={JavaSc}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        JavaSc
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.CSharp}>
                  <Dropdown
                    overlay={CSharp}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        C#
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.Swift}>
                  <Dropdown
                    overlay={Swift}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        Swift
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.CLang}>
                  <Dropdown
                    overlay={CLang}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        C
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <div className={styles.Python}>
                  <Dropdown
                    overlay={Python}
                    placement="bottom"
                  >
                    <Space>
                      <div>
                        Python
                      </div>
                    </Space>
                  </Dropdown>
                </div>
                <p className={styles.MP3}></p>
                <p className={styles.MP4}></p>
              </div>
              <p className={styles.BP3}></p>
              <p className={styles.BP4}></p>

            </div>

          </div>
        </div>
      </div>


    </div >
  )
}
