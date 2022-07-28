const createAutoComplete= ({root, renderOption, onOptionSelect, inputValue, fetchData})=>{
root.innerHTML= 
    `<label><b>Search for an Item</b></label>
     <input class="input"/>
     <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>`;

    const input= root.querySelector('input');
    const dropdown= root.querySelector('.dropdown');
    const resultsWrapper= root.querySelector('.results');

    const onInput= async event=>{
        const items=await fetchData(event.target.value);
        if(!items.length){
            dropdown.classList.remove('is-active');
        }
        resultsWrapper.innerHTML=''
        dropdown.classList.add('is-active');
        for (let item of items){
            const opt= document.createElement('a');
            opt.classList.add(`dropdown-item`)
            opt.innerHTML= renderOption(item);
            opt.addEventListener('click',()=>{
                dropdown.classList.remove('is-active');
                input.value=inputValue(item);
                onOptionSelect(item)
            })
            resultsWrapper.appendChild(opt);
        }
    };
    input.addEventListener("input", debounce(onInput))
    document.addEventListener('click', e=>{
    if (!root.contains(e.target)){
        dropdown.classList.remove('is-active');
    }
})
}