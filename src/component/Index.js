import React from 'react'

const Index = () => {
  return (
    <>
    <div className="calculator">
        <div className="main-part">
            <h2>CALC-U-LATOR</h2>
            <div className="display">
                <input className='input-fleid' type="text" />
                <p>ENTER SOME NUMBERS</p>
            </div>
            <div className="inptut-button">
            <div class="grid-container">
               <div class="grid-item"> <button>C</button></div>
               <div class="grid-item"><button>.</button></div>
               <div class="grid-item" style={{color: "black"}}><button>*</button></div>
               <div class="grid-item"><button>/</button></div>
               <div class="grid-item"><button>7</button></div>
               <div class="grid-item"><button>8</button></div>
               <div class="grid-item"><button>9</button></div>
               <div class="grid-item"><button>-</button></div>
               <div class="grid-item"><button>4</button></div>
               <div class="grid-item"><button>5</button></div>
               <div class="grid-item"><button>6</button></div>
               <div class="grid-item"><button>+</button></div>
               <div class="grid-item"><button>1</button></div>
               <div class="grid-item"><button>2</button></div>
               <div class="grid-item"><button>3</button></div>
               <div class="grid-item"><button>=</button></div>
               {/* <div class="grid-item">8</div>
               <div class="grid-item">9</div> */}
             </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Index