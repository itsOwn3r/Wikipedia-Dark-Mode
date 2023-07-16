let style = document.createElement("style");
style.innerHTML = `
*{
background-color: #000000 !important;
color: #f5f5f5a8 !important;
}
body{
background-color: #000000 !important;
color: #f5f5f5a8 !important;
}
a {
  color: #424f8f !important;
}
img{
  opacity: 0.6;
}

img:hover{
  opacity: 1;
}

span.mw-logo-container img {
  background-color: #1c1c1c !important;
  border-radius: 5px;
}
.vector-feature-zebra-design-disabled #vector-toc-pinned-container .vector-toc::after{
  background: linear-gradient(rgb(8 8 8 / 0%),#1c1c1c9e);
  border-radius: 5px;
}
#footer-icons li, .mw-logo-icon{
  opacity: 0.6;
}
span.mw-logo-container img {
  background-color: #1c1c1c !important;
  border-radius: 5px;
}
.mwe-popups .mwe-popups-extract[dir='rtl']::after {
  left: 0;
  background-image: linear-gradient(to left,rgb(70 66 66 / 0%),#1c1c1ce0 50%);
}
.mwe-popups .mwe-popups-extract[dir='ltr']::after {
  background-image: linear-gradient(to left,rgb(70 66 66 / 0%),#1c1c1ce0 50%);
}

.mwe-popups.mwe-popups-is-not-tall .mwe-popups-extract p {
  border: 1px solid #565656;
}

.mwe-popups.mwe-popups-is-not-tall .mwe-popups-extract {
  padding: 3px 10px;
}

tr + tr > .navbox-abovebelow, tr + tr > .navbox-group, tr + tr > .navbox-image, tr + tr > .navbox-list {
  border-top: 2px solid #1c1a1a;
}
.navbox-list {
  border-color: #2e2f30;
}

.vector-icon.mw-ui-icon-wikimedia-ellipsis {
  background-color: #1c1c1c !important;
  border-radius: 5px;
}


::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #2e2626; 
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2e2626; 
}
`;
try {
  document.querySelector('head').append(style)
} catch (error) {
  console.log(error)
}
