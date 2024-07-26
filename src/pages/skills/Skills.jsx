import React from 'react';
import './skills.css';
import { cpp, c, python, react, javascript, css, html, matLab, github, git, latex, verilog, arm, quartus, gtk, vscode, LTSpice, multisim, logisim, valgrind, glade, modelsim, Linux, OpenMP, GitLab, Sentaurus, Wireshark, NumPy, SciPy, Pandas, Matplotlib, Keil, STM32CubeIDE, STM32CubeMX, STM32F446ZE, DE1SoC, PyTorch, Hercules, Jupyter, GoogleColab, Bash} from './imports.js';
import { Footer } from '../../components';

const SkillsList = () => {
  return (
    <>
      <ImageSkillsContainer
        title={"C++"}
        image={cpp}
        image_alt={"C++"}
      />

      <ImageSkillsContainer 
        title={"C"}
        image={c}
        image_alt={"C"}
      />

      <ImageSkillsContainer 
        title={"Python"}
        image={python}
        image_alt={"Python"}
      />

      <ImageSkillsContainer 
        title={"Linux"}
        image={Linux}
        image_alt={"Linux"}
      />
      
      <ImageSkillsContainer 
        title={"React.js"}
        image={react}
        image_alt={"React.js"}
      />

      <ImageSkillsContainer 
        title={"JavaScript"}
        image={javascript}
        image_alt={"JavaScript"}
      />

      <ImageSkillsContainer 
        title={"CSS"}
        image={css}
        image_alt={"CSS"}
      />

      <ImageSkillsContainer 
        title={"HTML"}
        image={html}
        image_alt={"HTML"}
      />

      <ImageSkillsContainer 
        title={"Bash"}
        image={Bash}
        image_alt={"Bash"}
      />

      <ImageSkillsContainer 
        title={"MATLAB"}
        image={matLab}
        image_alt={"MATLAB"}
      />
      
      <ImageSkillsContainer 
        title={"GitHub"}
        image={github}
        image_alt={"GitHub"}
      />

      <ImageSkillsContainer 
        title={"Git"}
        image={git}
        image_alt={"Git"}
      />

      <ImageSkillsContainer 
        title={"GitLab"}
        image={GitLab}
        image_alt={"GitLab"}
      />

      <ImageSkillsContainer 
        title={"Valgrind"}
        image={valgrind}
        image_alt={"Valgrind"}
      />

      <ImageSkillsContainer 
        title={"OpenMP"}
        image={OpenMP}
        image_alt={"OpenMP"}
      />

      <ImageSkillsContainer 
        title={"GTK"}
        image={gtk}
        image_alt={"GTK"}
      />

      <ImageSkillsContainer 
        title={"Glade Graphical Interface"}
        image={glade}
        image_alt={"Glade Graphical Interface"}
      />

      <ImageSkillsContainer 
        title={"ARM Assembly"}
        image={arm}
        image_alt={"ARM assembly programming"}
      />

      <ImageSkillsContainer 
        title={"PyTorch"}
        image={PyTorch}
        image_alt={"PyTorch"}
      />

      <ImageSkillsContainer 
        title={"Keil uVision"}
        image={Keil}
        image_alt={"Keil uVision"}
      />

      <ImageSkillsContainer 
        title={"Jupyter Notebook"}
        image={Jupyter}
        image_alt={"Jupyter Notebook"}
      />

      <ImageSkillsContainer 
        title={"NumPy"}
        image={NumPy}
        image_alt={"NumPy"}
      />

      <ImageSkillsContainer 
        title={"SciPy"}
        image={SciPy}
        image_alt={"SciPy"}
      />

      <ImageSkillsContainer 
        title={"Pandas"}
        image={Pandas}
        image_alt={"Pandas"}
      />

      <ImageSkillsContainer 
        title={"Matplotlib"}
        image={Matplotlib}
        image_alt={"Matplotlib"}
      />

      <ImageSkillsContainer 
        title={"STM32CubeIDE"}
        image={STM32CubeIDE}
        image_alt={"STM32CubeIDE"}
      />

      <ImageSkillsContainer 
        title={"STM32CubeMX"}
        image={STM32CubeMX}
        image_alt={"STM32CubeMX"}
      />

      <ImageSkillsContainer 
        title={"STM32-Nucleo-F446ZE"}
        image={STM32F446ZE}
        image_alt={"STM32-Nucleo-F446ZE"}
      />

      <ImageSkillsContainer 
        title={"Verilog"}
        image={verilog}
        image_alt={"Verilog"}
      />

      <ImageSkillsContainer 
        title={"Intel® Quartus Prime"}
        image={quartus}
        image_alt={"Intel® Quartus Prime"}
      />

      <ImageSkillsContainer 
        title={"De1-SoC"}
        image={DE1SoC}
        image_alt={"De1-SoC"}
      />

      <ImageSkillsContainer 
        title={"ModelSim"}
        image={modelsim}
        image_alt={"ModelSim"}
      />

      <ImageSkillsContainer 
        title={"Sentaurus"}
        image={Sentaurus}
        image_alt={"Sentaurus"}
      />

      <ImageSkillsContainer 
        title={"Logisim"}
        image={logisim}
        image_alt={"Logisim"}
      />

      <ImageSkillsContainer 
        title={"NI MultiSim"}
        image={multisim}
        image_alt={"NI MultiSim"}
      />

      <ImageSkillsContainer 
        title={"LTSpice"}
        image={LTSpice}
        image_alt={"LTSpice"}
      />

      <ImageSkillsContainer 
        title={"Wireshark"}
        image={Wireshark}
        image_alt={"Wireshark"}
      />

      <ImageSkillsContainer 
        title={"Vscode"}
        image={vscode}
        image_alt={"Vscode"}
      />

      <ImageSkillsContainer 
        title={"Google Colab"}
        image={GoogleColab}
        image_alt={"Google Colab"}
      />

      <ImageSkillsContainer 
        title={"Hercules"}
        image={Hercules}
        image_alt={"Hercules"}
      />

      <ImageSkillsContainer 
        title={"LaTeX"}
        image={latex}
        image_alt={"LaTeX"}
      />
    </>
  )
}

const ImageSkillsContainer = (props) => {
  return (
    <>
      <div className="charles__skills__container">
        <h1>
          {props.title}
          <br />
          <img src={props.image} alt={props.image_alt}/>
        </h1>
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <div className="charles__skills section__padding">
        <div className="charles__skills-heading">
          <h1 className="gradient__text">Skills</h1>
          
          <p>
            This page lists out all of the languages and tools that Charles had experienced 
            using in his life. To learn more about Charles' expertise amongst these tools, 
            please feel free to contact him.
          </p>
        </div>

        <div className="charles__skills__section">
          <SkillsList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills