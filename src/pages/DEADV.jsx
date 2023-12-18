import React, { useState } from "react";


const Plataformas = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        color: "#fff",
      }}
    >
      <div>
        {[false].map((expand) => (
          <div key={expand} style={{ backgroundColor: "#590000" }}>
            <div
              style={{ margin: "0 auto", padding: "5px", maxWidth: "800px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/images/open-laptop-computer_icon-icons.com_73474.png"
                    alt="Plataformas Virtuales"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                    }}
                  />
                  <span>Plataformas Virtuales</span>
                </div>
                <button
                  onClick={toggleMenu}
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    padding: "5px",
                    fontSize: "1.5rem",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "0.5rem",
            color: "black",
          }}
        >
          SERVICIOS EN LÍNEA
        </h2>
      </div>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1000px",
        }}
      >
        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="http://educaciononline.uta.edu.ec:8080/DEaDV_Proyectos/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/cloud_icon-icons.com_71233.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                DEADV INTERNO
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Sistema Interno de la Dirección de Educación a Distancia y
                Virtual.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="http://educaciononline.uta.edu.ec:8080/cliente/simples/consultaparalelos/v1/#/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/book_icon-icons.com_73655.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                CONSULTA DE PARALELO
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Consulte su paralelo y ubicación donde se impartirá su curso.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="http://educaciononline.uta.edu.ec/DEaDV/cliente/simples/consultaasistencia/v1/#/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/group_81033.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                CONSULTA DE REGISTRO ASISTENCIA
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Sistema para la consulta de su Registro de Asistencia de cursos.
              </center>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1000px",
        }}
      >
        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="http://educaciononline.uta.edu.ec:8080/deadvext/apps/appencuesta/index.html#/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/card_checklist_icon_185219.png"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                ENCUESTA
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Formulario para la evaluación de los cursos ejecutados.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/searchcert/#/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/certificate-shape_icon-icons.com_73640.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                CERTIFICADOS
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>Consulta de certificados de los cursos aprobados.</center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/index.php?option=com_sppagebuilder&view=page&id=7"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/open-laptop-computer_icon-icons.com_73474.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                PLATAFORMAS EDUCATIVAS
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Acceso a las plataformas educativas de cada una de las unidades
                académicas.
              </center>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1000px",
        }}
      >
        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/index.php?option=com_sppagebuilder&view=page&id=13"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/video-call-1_icon-icons.com_48394.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                GALERÍA DE VIDEOS
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Galería de videos promocionales, vivenciales o eventos generados
                en la DEaDV.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="http://educaciononline.uta.edu.ec:8080/DEaDV_Convocatoria_Tutor/#/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/personavatar_99746.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                TRABAJA CON NOSOTROS
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Formulario para ingreso de hoja de vida para posibles tutores de
                la DEaDV.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/index.php?option=com_sppagebuilder&view=page&id=12"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/download-to-storage-drive_icon-icons.com_73590.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                DESCARGAS
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                {" "}
                Zona de material de descarga como: formularios, manuales y
                material extra.
              </center>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1000px",
        }}
      >
        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/index.php/preguntas-frecuentes"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/help_information_info_support_service_faq_question_icon_219356.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                PREGUNTAS FRECUENTES
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Detalle de las preguntas frecuentes en cuanto a los servicios de
                la DEaDV.
              </center>
            </p>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://deadv.uta.edu.ec/posgrados/formulario/login"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/images/document_3530.png"
                alt="DEADV INTERNO"
                style={{ width: "32px", height: "auto", marginRight: "10px" }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: "5px",
                }}
              >
                SISTEMA DE CREACIÓN DE AULAS VIRTUALES (SCAV)
              </div>
            </a>
            <p style={{ color: "black" }}>
              <center>
                Sistema para registro de formularios para la creación de aulas
                virtuales.
              </center>
            </p>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0vh",
            right: 0,
            width: "350px",
            backgroundColor: "#8b0000",
            color: "#fff",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <h5 style={{ padding: "20px" }}>
            Plataformas Virtuales
            <button
              onClick={toggleMenu}
              style={{
                cursor: "pointer",
                color: "#fff",
                padding: "10px",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
              }}
            >
              ✖
            </button>
          </h5>
          <nav>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a
                  href="https://educacioncontinua.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Dirección de Educación Continua a Distancia y Virtual
                </a>
              </li>
              <li>
                <a
                  href="https://deadvmooc.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  MOOC - Dirección de Educación Continua a Distancia y Virtual
                </a>
              </li>
              <li>
                <a
                  href="https://idiomaseducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Centro de Idiomas
                </a>
              </li>
              <li>
                <a
                  href="https://deadvestudiantes.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Centro de Cultura Física
                </a>
              </li>
              <li>
                <a
                  href="https://alimentoseducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ciencia e Ingeniería en Alimentos y Biotecnología
                </a>
              </li>
              <li>
                <a
                  href="https://administracioneducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ciencias Administrativas
                </a>
              </li>
              <li>
                <a
                  href="https://agronomiaeducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ciencias Agropecuarias
                </a>
              </li>
              <li>
                <a
                  href="https://saludeducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ciencias de la Salud{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://humanaseducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ciencias Humanas y de la Educación{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://auditoriaeducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Contabilidad y Auditoría
                </a>
              </li>
              <li>
                <a
                  href="https://arteseducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Diseño, Arquitectura y Artes
                </a>
              </li>
              <li>
                <a
                  href="https://civileducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ingeniería Civil y Mecánica
                </a>
              </li>
              <li>
                <a
                  href="https://sistemaseducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Ingeniería en Sistemas, Electrónica e Industrial
                </a>
              </li>
              <li>
                <a
                  href="https://jurisprudenciaeducaciononline.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Jurisprudencia y Ciencias Sociales{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://posgrados.uta.edu.ec/login/index.php"
                  style={{
                    color: "#fff",
                    padding: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Dirección de Posgrados{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Plataformas;
