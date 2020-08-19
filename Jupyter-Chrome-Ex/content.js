
// Make jupyter stop killing your eyes

if(window.location.href.includes('localhost')){
    
    console.log('%c Local Host', 'color: yellow');

    var customizeBtn = document.createElement('button');
    customizeBtn.id = 'customize';
    customizeBtn.innerText = 'Customize';
    document.querySelector('div#header-container').appendChild(customizeBtn);
    var customizeArea = document.createElement('div');
    customizeArea.classList.add('container');
    customizeArea.classList.add('customize-area');
    customizeArea.style.cssText = `display:flex;align-items:center`;

    customizeArea.innerHTML = `
    <h4 class="customH4">Front Layer Color:</h4><input id="frontLayerColor" name="Color Picker" type="color"/>
    <h4 class="customH4">Background Color:</h4><input id="backgroundColor" name="Color Picker" type="color"/>
    <h4 class="customH4">Text Color:</h4><input id="textColor" name="Color Picker" type="color"/>
    `;

    // function FrontLayer(elements)
    const colorAssignments = {
        frontLayerColor: ['div#header', 'div#notebook-container'],
        backgroundColor: ['div.CodeMirror-lines', 'div#notebook']
    }

    function updateColor(event){
        var header = document.querySelector('div#header');
        // console.log(event.target.id);
        var id = event.target.id;
        var elementList = colorAssignments[id];
        var colorHex = event.target.value;
        elementList.forEach((el)=>{
            document.querySelectorAll(el).forEach((subEl)=>{
                subEl.style.backgroundColor = event.target.value;
            })
        })
        // header.style.backgroundColor = event.target.value;
    }

    customizeBtn.onclick = function(){
        document.querySelector('#header').style.height = '235px';
        document.querySelector('#header').appendChild(customizeArea);

        document.querySelectorAll('input[type=color]').forEach((input)=>{
            input.addEventListener('input', updateColor, false);
        })
    }
    // document.


    // document.querySelector('#header').style.background = 'cornsilk';
    // document.querySelector('#notebook').style.background = 'cadetblue';
    // document.querySelector('#notebook-container').style.background = 'cornsilk';

}else{
    console.log('');
}


