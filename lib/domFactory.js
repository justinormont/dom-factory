function domFactory(nodeType, attr, childNodes) {
    var domNode = document.createElement(nodeType);
    if (attr) { Object.keys(attr).forEach(function(a) { domNode.setAttribute(a) = attr[a]; }); }
    if (childNodes && Array.isArray(childNodes)) { childNodes.forEach(function(n) { if (n) { domNode.appendChild(n); } }); }
    return domNode;
}
