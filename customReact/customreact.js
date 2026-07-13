

function customRender(reactElement, container){
    /*
    const domElement = document.createElement(
        reactElement.type)
        domElement.innerHTML = reactElement.children//elemenet inject kiya
        domElement.setAttribute('href', reactElement.props.href)
        domElement.setAttribute('target', reactElement.props.target)

        container.appendChild(domElement)//main container me append kiya
        */


      //upar wala sahi hai but better neche hai

        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for(const prop in reactElement.props ){
            if(prop === 'children') continue
            domElement.setAttribute(prop, reactElement.props[prop])

        }
        container.appendChild(domElement)
}



const reactElement = {
    type: 'a', // div , tag, a
    props:{// properties , ye object hota hai
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me! to visit Google'
}
// html me jo likha hota hai wo react ko is form me milta hai, react element ke form me



const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)