(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.element.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/WebstormProjects/Nexter/node_modules/postcss-loader/src??embedded!/home/ubuntu/WebstormProjects/Nexter/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app/app.element.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\n*:before,\n*:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  font-family: \"Nunito\", sans-serif;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: \"Nunito\", sans-serif;\n  color: #6d5d4b;\n  font-weight: 300;\n  line-height: 1.6;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 80vh -webkit-min-content 40vw repeat(3, -webkit-min-content);\n  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);\n  grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(-webkit-min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];\n  grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];\n}\n\n@media only screen and (max-width: 62.5em) {\n  .container {\n    grid-template-rows: 6rem 80vh -webkit-min-content 40vw repeat(3, -webkit-min-content);\n    grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);\n    grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(-webkit-min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];\n    grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];\n  }\n}\n\n@media only screen and (max-width: 62.5em) {\n  .container {\n    grid-template-rows: 6rem calc(100vh - 6rem) -webkit-min-content -webkit-min-content 40vw repeat(3, -webkit-min-content);\n    grid-template-rows: 6rem calc(100vh - 6rem) min-content min-content 40vw repeat(3, min-content);\n  }\n}\n\n@media only screen and (max-width: 50em) {\n  .container {\n    grid-template-rows: 6rem calc(100vh - 6rem);\n  }\n}\n\n.heading-4, .heading-3, .heading-2, .heading-1 {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.heading-1 {\n  font-size: 4.5rem;\n  color: #f9f7f6;\n  line-height: 1;\n}\n\n.heading-2 {\n  font-size: 4rem;\n  font-style: italic;\n  line-height: 1;\n}\n\n.heading-2--light {\n  color: #f9f7f6;\n}\n\n.heading-2--dark {\n  color: #54483a;\n}\n\n.heading-3 {\n  font-size: 1.6rem;\n  color: #c69963;\n  text-transform: uppercase;\n}\n\n.heading-4 {\n  font-size: 1.9rem;\n}\n\n.heading-4--light {\n  color: #f9f7f6;\n}\n\n.heading-4--dark {\n  color: #54483a;\n}\n\n.btn {\n  background-color: #c69963;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  padding: 1.8rem 3rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.btn:hover {\n  background-color: #b28451;\n}\n\n.mb-sm {\n  margin-bottom: 2rem;\n}\n\n.mb-md {\n  margin-bottom: 3rem;\n}\n\n.mb-lg {\n  margin-bottom: 4rem;\n}\n\n.mb-hg {\n  margin-bottom: 8rem;\n}\n\n.sidebar {\n  background-color: #c69963;\n  grid-column: sidebar-start/sidebar-end;\n  grid-row: 1/-1;\n  display: flex;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 62.5em) {\n  .sidebar {\n    grid-column: 1/-1;\n    grid-row: 1/2;\n    justify-content: end;\n    align-items: center;\n  }\n}\n\n.nav-btn {\n  border: none;\n  border-radius: 0;\n  background-color: #fff;\n  height: 2px;\n  width: 4.5rem;\n  margin-top: 4rem;\n}\n\n.nav-btn:before, .nav-btn:after {\n  content: \"\";\n  background-color: #fff;\n  height: 2px;\n  width: 4.5rem;\n  display: block;\n}\n\n.nav-btn:before {\n  transform: translateY(-1.5rem);\n}\n\n.nav-btn:after {\n  transform: translateY(1.3rem);\n}\n\n@media only screen and (max-width: 62.5em) {\n  .nav-btn {\n    margin-top: 0;\n    margin-right: 3rem;\n  }\n  .nav-btn:before {\n    transform: translateY(-1.2rem);\n  }\n  .nav-btn:after {\n    transform: translateY(1rem);\n  }\n}\n\n.header {\n  background-color: #54483a;\n  grid-column: full-start/col-end 6;\n  background-image: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url('hero.jpeg');\n  background-size: cover;\n  background-position: center;\n  padding: 4rem 8rem 8rem 8rem;\n  display: grid;\n  grid-template-rows: 1fr -webkit-min-content minmax(-webkit-min-content, 6rem) 1fr;\n  grid-template-rows: 1fr min-content minmax(min-content, 6rem) 1fr;\n  grid-template-columns: minmax(-webkit-min-content, -webkit-max-content);\n  grid-template-columns: minmax(min-content, max-content);\n  grid-row-gap: 1.5rem;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 50em) {\n  .header {\n    grid-column: 1/-1;\n  }\n}\n\n.header__logo {\n  height: 3rem;\n  justify-self: center;\n}\n\n.header__seenon-text {\n  display: grid;\n  font-size: 1.8rem;\n  color: #aaa;\n  grid-template-columns: 1fr -webkit-max-content 1fr;\n  grid-template-columns: 1fr max-content 1fr;\n  grid-column-gap: 1.5rem;\n  align-items: center;\n}\n\n.header__seenon-text:before, .header__seenon-text:after {\n  content: \"\";\n  height: 2px;\n  display: block;\n  background-color: currentColor;\n}\n\n.header__seenon-logos {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 3rem;\n  justify-items: center;\n}\n\n.header__seenon-logos img {\n  max-height: 2.5rem;\n  max-width: 100%;\n  -webkit-filter: brightness(70%);\n          filter: brightness(70%);\n}\n\n.header button {\n  align-self: start;\n  justify-self: start;\n}\n\n.realtors {\n  background-color: #101d2c;\n  grid-column: col-start 7/full-end;\n  padding: 3rem;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  grid-row-gap: 2rem;\n  justify-items: center;\n}\n\n@media only screen and (max-width: 50em) {\n  .realtors {\n    grid-column: 1/-1;\n  }\n}\n\n.realtors__list {\n  display: grid;\n  grid-template-columns: -webkit-min-content -webkit-max-content;\n  grid-template-columns: min-content max-content;\n  grid-column-gap: 2rem;\n  grid-row-gap: 5vh;\n  align-items: center;\n}\n\n.realtors__img {\n  width: 7rem;\n  border-radius: 50%;\n  display: block;\n}\n\n.realtors__sold {\n  text-transform: uppercase;\n  color: #aaa;\n  margin-top: -3px;\n}\n\n.features {\n  grid-column: center-start/center-end;\n  margin: 15rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n  grid-gap: 6rem;\n}\n\n.icon-tabler {\n  width: 4.5rem;\n  height: 4.5rem;\n  color: #c69963;\n  grid-row: 1/span 2;\n}\n\n.feature {\n  display: grid;\n  grid-template-columns: -webkit-min-content 1fr;\n  grid-template-columns: min-content 1fr;\n  grid-template-rows: 20% 80%;\n  grid-row-gap: 1.5rem;\n}\n\n.feature__text {\n  font-size: 1.7rem;\n}\n\n.story__pictures {\n  background-color: #c69963;\n  grid-column: full-start/col-end 4;\n  background-image: linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url('back.jpg');\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template-rows: repeat(6, 1fr);\n  grid-template-columns: repeat(6, 1fr);\n  align-items: center;\n}\n\n@media only screen and (max-width: 50em) {\n  .story__pictures {\n    grid-column: 1/-1;\n    padding: 3rem;\n  }\n}\n\n.story__img--1 {\n  width: 100%;\n  grid-row: 2/span 4;\n  grid-column: 2/span 4;\n  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n}\n\n@media only screen and (max-width: 50em) {\n  .story__img--1 {\n    grid-column: 1/5;\n    grid-row: 1/-1;\n    height: 100%;\n  }\n}\n\n.story__img--2 {\n  width: 115%;\n  grid-row: 4/6;\n  grid-column: 4/7;\n  z-index: 20;\n  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n}\n\n@media only screen and (max-width: 50em) {\n  .story__img--2 {\n    grid-row: 1/-1;\n    grid-column: 4/7;\n    width: 100%;\n  }\n}\n\n.story__content {\n  background-color: #f9f7f6;\n  grid-column: col-start 5/full-end;\n  padding: 6rem 8vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n@media only screen and (max-width: 50em) {\n  .story__content {\n    grid-column: 1/-1;\n    grid-row: 5/6;\n  }\n}\n\n.story__text {\n  font-size: 1.5rem;\n  font-style: italic;\n  margin-bottom: 4rem;\n}\n\n.homes {\n  grid-column: center-start/center-end;\n  margin: 15rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n  grid-gap: 7rem;\n}\n\n.home {\n  background-color: #f9f7f6;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 3.5rem;\n}\n\n.home__img {\n  width: 100%;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 1;\n}\n\n.home .icon-tabler-heart {\n  grid-row: 1/2;\n  grid-column: 2/3;\n  height: 2.5rem;\n  width: 2.5rem;\n  color: red;\n  z-index: 2;\n  justify-self: end;\n  margin: 1rem;\n}\n\n.home__name {\n  grid-column: 1/-1;\n  grid-row: 1/2;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1.6rem;\n  text-align: center;\n  padding: 1.25rem;\n  background-color: #101d2c;\n  color: #fff;\n  font-weight: 400;\n  width: 80%;\n  justify-self: center;\n  z-index: 2;\n  align-self: end;\n  transform: translateY(50%);\n}\n\n.home__location, .home__rooms {\n  margin-top: 2.5rem;\n}\n\n.home__location, .home__rooms, .home__area, .home__price {\n  font-size: 1.4rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.home__location svg, .home__rooms svg, .home__area svg, .home__price svg {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n\n.home__btn {\n  grid-column: 1/-1;\n}\n\n.gallery {\n  grid-column: full-start/full-end;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(7, 5vw);\n  grid-gap: 1.5rem;\n  padding: 1.5rem;\n}\n\n.gallery__item--1 {\n  grid-row: 1/span 2;\n  grid-column: 1/span 2;\n}\n\n.gallery__item--2 {\n  grid-row: 1/span 3;\n  grid-column: 3/span 3;\n}\n\n.gallery__item--3 {\n  grid-row: 1/span 2;\n  grid-column: 6/7;\n}\n\n.gallery__item--4 {\n  grid-row: 1/span 2;\n  grid-column: 7/span 2;\n}\n\n.gallery__item--5 {\n  grid-row: 3/span 3;\n  grid-column: 1/span 2;\n}\n\n.gallery__item--6 {\n  grid-row: 4/span 2;\n  grid-column: 3/span 2;\n}\n\n.gallery__item--7 {\n  grid-row: 4/5;\n  grid-column: 5/6;\n}\n\n.gallery__item--8 {\n  grid-row: 3/span 2;\n  grid-column: 6/span 2;\n}\n\n.gallery__item--9 {\n  grid-row: 3/span 3;\n  grid-column: 8/-1;\n}\n\n.gallery__item--10 {\n  grid-row: 6/span 2;\n  grid-column: 1/span 1;\n}\n\n.gallery__item--11 {\n  grid-row: 6/span 2;\n  grid-column: 2/span 2;\n}\n\n.gallery__item--12 {\n  grid-row: 6/span 2;\n  grid-column: 4/span 1;\n}\n\n.gallery__item--13 {\n  grid-row: 5/span 3;\n  grid-column: 5/span 3;\n}\n\n.gallery__item--14 {\n  grid-row: 6/span 2;\n  grid-column: 8/span 2;\n}\n\n.gallery__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.footer {\n  background-color: #101d2c;\n  grid-column: full-start/full-end;\n  padding: 10rem;\n}\n\n.nav {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  grid-gap: 2rem;\n  align-items: center;\n}\n\n.nav__link:link, .nav__link:visited {\n  color: #fff;\n  font-size: 1.4rem;\n  text-decoration: none;\n  font-family: \"Josefin Sans\", sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 1.5rem;\n  display: inline-block;\n  transition: all 0.2s;\n}\n\n.nav__link:hover, .nav__link:active {\n  background-color: rgba(255, 255, 255, 0.5);\n  transform: translateY(-3px);\n}\n\n.copyright {\n  font-size: 1.4rem;\n  color: #aaa;\n  margin-top: 6rem;\n  text-align: center;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL05leHRlci9hcHBzL25leHRlci9zcmMvYXBwL19iYXNlLnNjc3MiLCJhcHBzL25leHRlci9zcmMvYXBwL2FwcC5lbGVtZW50LnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9OZXh0ZXIvYXBwcy9uZXh0ZXIvc3JjL2FwcC9fdHlwb2dyYXBoeS5zY3NzIiwiL2hvbWUvdWJ1bnR1L1dlYnN0b3JtUHJvamVjdHMvTmV4dGVyL2FwcHMvbmV4dGVyL3NyYy9hcHAvX3NpZGViYXIuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL05leHRlci9hcHBzL25leHRlci9zcmMvYXBwL19oZWFkZXIuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL05leHRlci9hcHBzL25leHRlci9zcmMvYXBwL19yZWFsdG9ycy5zY3NzIiwiL2hvbWUvdWJ1bnR1L1dlYnN0b3JtUHJvamVjdHMvTmV4dGVyL2FwcHMvbmV4dGVyL3NyYy9hcHAvX2ZlYXR1cmVzLnNjc3MiLCIvaG9tZS91YnVudHUvV2Vic3Rvcm1Qcm9qZWN0cy9OZXh0ZXIvYXBwcy9uZXh0ZXIvc3JjL2FwcC9fc3Rvcnkuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL05leHRlci9hcHBzL25leHRlci9zcmMvYXBwL19ob21lcy5zY3NzIiwiL2hvbWUvdWJ1bnR1L1dlYnN0b3JtUHJvamVjdHMvTmV4dGVyL2FwcHMvbmV4dGVyL3NyYy9hcHAvX2dhbGxlcnkuc2NzcyIsIi9ob21lL3VidW50dS9XZWJzdG9ybVByb2plY3RzL05leHRlci9hcHBzL25leHRlci9zcmMvYXBwL19mb290ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQW5CYTtB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b250ZW50IjpbIi8vIENPTE9SIFZBUklBQkxFU1xuJGNvbG9yLXByaW1hcnk6ICNjNjk5NjM7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjI4NDUxO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMTAxZDJjO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjlmN2Y2O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2FhYTtcblxuJGNvbG9yLWdyZXktZGFyay0xOiAjNTQ0ODNhO1xuJGNvbG9yLWdyZXktZGFyay0yOiAjNmQ1ZDRiO1xuXG4vLyBGT05UIFZBUklBQkxFU1xuJGZvbnQtcHJpbWFyeTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4kZm9udC1kaXNwbGF5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuLy8gUkVTUE9OU0lWRSBCUkVBS1BPSU5UU1xuJGJwLWxhcmdlc3Q6IDc1ZW07XG4kYnAtbGFyZ2U6IDYyLjVlbTtcbiRicC1tZWRpdW06IDUwZW07XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDYyLjUlO1xuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZXN0KSB7XG4gICAgZm9udC1zaXplOiA1MCU7XG4gIH1cbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xuICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0yO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHZoIG1pbi1jb250ZW50IDQwdncgcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxuICAgIFtzaWRlYmFyLXN0YXJ0XSA4cmVtIFtzaWRlYmFyLWVuZCBmdWxsLXN0YXJ0XSBtaW5tYXgoNnJlbSwgMWZyKVxuICAgIFtjZW50ZXItc3RhcnRdIHJlcGVhdCg4LCBbY29sLXN0YXJ0XSBtaW5tYXgobWluLWNvbnRlbnQsIDE0cmVtKSBbY29sLWVuZF0pXG4gICAgW2NlbnRlci1lbmRdIG1pbm1heCg2cmVtLCAxZnIpIFtmdWxsLWVuZF07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2UpIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gODB2aCBtaW4tY29udGVudCA0MHZ3IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxuICAgICAgW2Z1bGwtc3RhcnRdIG1pbm1heCg2cmVtLCAxZnIpXG4gICAgICBbY2VudGVyLXN0YXJ0XSByZXBlYXQoOCwgW2NvbC1zdGFydF0gbWlubWF4KG1pbi1jb250ZW50LCAxNHJlbSkgW2NvbC1lbmRdKVxuICAgICAgW2NlbnRlci1lbmRdIG1pbm1heCg2cmVtLCAxZnIpIFtmdWxsLWVuZF07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSBjYWxjKDEwMHZoIC0gNnJlbSkgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgNDB2dyByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIGNhbGMoMTAwdmggLSA2cmVtKTtcbiAgfVxufVxuIiwiKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICB9XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2ZDVkNGI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwdmggbWluLWNvbnRlbnQgNDB2dyByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtzaWRlYmFyLXN0YXJ0XSA4cmVtIFtzaWRlYmFyLWVuZCBmdWxsLXN0YXJ0XSBtaW5tYXgoNnJlbSwgMWZyKSBbY2VudGVyLXN0YXJ0XSByZXBlYXQoOCwgW2NvbC1zdGFydF0gbWlubWF4KG1pbi1jb250ZW50LCAxNHJlbSkgW2NvbC1lbmRdKSBbY2VudGVyLWVuZF0gbWlubWF4KDZyZW0sIDFmcikgW2Z1bGwtZW5kXTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNWVtKSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSA4MHZoIG1pbi1jb250ZW50IDQwdncgcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtmdWxsLXN0YXJ0XSBtaW5tYXgoNnJlbSwgMWZyKSBbY2VudGVyLXN0YXJ0XSByZXBlYXQoOCwgW2NvbC1zdGFydF0gbWlubWF4KG1pbi1jb250ZW50LCAxNHJlbSkgW2NvbC1lbmRdKSBbY2VudGVyLWVuZF0gbWlubWF4KDZyZW0sIDFmcikgW2Z1bGwtZW5kXTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41ZW0pIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIGNhbGMoMTAwdmggLSA2cmVtKSBtaW4tY29udGVudCBtaW4tY29udGVudCA0MHZ3IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xuICAuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gY2FsYygxMDB2aCAtIDZyZW0pO1xuICB9XG59XG5cbi5oZWFkaW5nLTQsIC5oZWFkaW5nLTMsIC5oZWFkaW5nLTIsIC5oZWFkaW5nLTEge1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhlYWRpbmctMSB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBjb2xvcjogI2Y5ZjdmNjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5oZWFkaW5nLTIge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uaGVhZGluZy0yLS1saWdodCB7XG4gIGNvbG9yOiAjZjlmN2Y2O1xufVxuLmhlYWRpbmctMi0tZGFyayB7XG4gIGNvbG9yOiAjNTQ0ODNhO1xufVxuXG4uaGVhZGluZy0zIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjYzY5OTYzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZGluZy00IHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59XG4uaGVhZGluZy00LS1saWdodCB7XG4gIGNvbG9yOiAjZjlmN2Y2O1xufVxuLmhlYWRpbmctNC0tZGFyayB7XG4gIGNvbG9yOiAjNTQ0ODNhO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2OTk2MztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyODQ1MTtcbn1cblxuLm1iLXNtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1iLW1kIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLm1iLWxnIHtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLm1iLWhnIHtcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY5OTYzO1xuICBncmlkLWNvbHVtbjogc2lkZWJhci1zdGFydC9zaWRlYmFyLWVuZDtcbiAgZ3JpZC1yb3c6IDEvLTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41ZW0pIHtcbiAgLnNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4ubmF2LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0LjVyZW07XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG4ubmF2LWJ0bjpiZWZvcmUsIC5uYXYtYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdi1idG46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVyZW0pO1xufVxuLm5hdi1idG46YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS4zcmVtKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNWVtKSB7XG4gIC5uYXYtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgfVxuICAubmF2LWJ0bjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4ycmVtKTtcbiAgfVxuICAubmF2LWJ0bjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ0ODNhO1xuICBncmlkLWNvbHVtbjogZnVsbC1zdGFydC9jb2wtZW5kIDY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE2LCAyOSwgNDQsIDAuOTMpLCByZ2JhKDE2LCAyOSwgNDQsIDAuOTMpKSwgdXJsKC4uL2Fzc2V0cy9pbWcvaGVyby5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiA0cmVtIDhyZW0gOHJlbSA4cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCBtaW5tYXgobWluLWNvbnRlbnQsIDZyZW0pIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIG1heC1jb250ZW50KTtcbiAgZ3JpZC1yb3ctZ2FwOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XG4gIC5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICB9XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX3NlZW5vbi10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAjYWFhO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fc2Vlbm9uLXRleHQ6YmVmb3JlLCAuaGVhZGVyX19zZWVub24tdGV4dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuLmhlYWRlcl9fc2Vlbm9uLWxvZ29zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzcmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19zZWVub24tbG9nb3MgaW1nIHtcbiAgbWF4LWhlaWdodDogMi41cmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xufVxuLmhlYWRlciBidXR0b24ge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLnJlYWx0b3JzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMWQyYztcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA3L2Z1bGwtZW5kO1xuICBwYWRkaW5nOiAzcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xuICAucmVhbHRvcnMge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICB9XG59XG4ucmVhbHRvcnNfX2xpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIGdyaWQtcm93LWdhcDogNXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlYWx0b3JzX19pbWcge1xuICB3aWR0aDogN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWFsdG9yc19fc29sZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uZmVhdHVyZXMge1xuICBncmlkLWNvbHVtbjogY2VudGVyLXN0YXJ0L2NlbnRlci1lbmQ7XG4gIG1hcmdpbjogMTVyZW0gMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNXJlbSwgMWZyKSk7XG4gIGdyaWQtZ2FwOiA2cmVtO1xufVxuXG4uaWNvbi10YWJsZXIge1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgY29sb3I6ICNjNjk5NjM7XG4gIGdyaWQtcm93OiAxL3NwYW4gMjtcbn1cblxuLmZlYXR1cmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xuICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbn1cbi5mZWF0dXJlX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5zdG9yeV9fcGljdHVyZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY5OTYzO1xuICBncmlkLWNvbHVtbjogZnVsbC1zdGFydC9jb2wtZW5kIDQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE5OCwgMTUzLCA5OSwgMC41KSwgcmdiYSgxOTgsIDE1MywgOTksIDAuNSkpLCB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xuICAuc3RvcnlfX3BpY3R1cmVzIHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG59XG4uc3RvcnlfX2ltZy0tMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXJvdzogMi9zcGFuIDQ7XG4gIGdyaWQtY29sdW1uOiAyL3NwYW4gNDtcbiAgYm94LXNoYWRvdzogMCA3cHggMzBweCAtMTBweCByZ2JhKDE1MCwgMTcwLCAxODAsIDAuNSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcbiAgLnN0b3J5X19pbWctLTEge1xuICAgIGdyaWQtY29sdW1uOiAxLzU7XG4gICAgZ3JpZC1yb3c6IDEvLTE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uc3RvcnlfX2ltZy0tMiB7XG4gIHdpZHRoOiAxMTUlO1xuICBncmlkLXJvdzogNC82O1xuICBncmlkLWNvbHVtbjogNC83O1xuICB6LWluZGV4OiAyMDtcbiAgYm94LXNoYWRvdzogMCA3cHggMzBweCAtMTBweCByZ2JhKDE1MCwgMTcwLCAxODAsIDAuNSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwZW0pIHtcbiAgLnN0b3J5X19pbWctLTIge1xuICAgIGdyaWQtcm93OiAxLy0xO1xuICAgIGdyaWQtY29sdW1uOiA0Lzc7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zdG9yeV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY3ZjY7XG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNS9mdWxsLWVuZDtcbiAgcGFkZGluZzogNnJlbSA4dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xuICAuc3RvcnlfX2NvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiA1LzY7XG4gIH1cbn1cbi5zdG9yeV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5ob21lcyB7XG4gIGdyaWQtY29sdW1uOiBjZW50ZXItc3RhcnQvY2VudGVyLWVuZDtcbiAgbWFyZ2luOiAxNXJlbSAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1cmVtLCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDdyZW07XG59XG5cbi5ob21lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjdmNjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1yb3ctZ2FwOiAzLjVyZW07XG59XG4uaG9tZV9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICB6LWluZGV4OiAxO1xufVxuLmhvbWUgLmljb24tdGFibGVyLWhlYXJ0IHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG4gIGNvbG9yOiByZWQ7XG4gIHotaW5kZXg6IDI7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW46IDFyZW07XG59XG4uaG9tZV9fbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBncmlkLXJvdzogMS8yO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMWQyYztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xufVxuLmhvbWVfX2xvY2F0aW9uLCAuaG9tZV9fcm9vbXMge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4uaG9tZV9fbG9jYXRpb24sIC5ob21lX19yb29tcywgLmhvbWVfX2FyZWEsIC5ob21lX19wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG4uaG9tZV9fbG9jYXRpb24gc3ZnLCAuaG9tZV9fcm9vbXMgc3ZnLCAuaG9tZV9fYXJlYSBzdmcsIC5ob21lX19wcmljZSBzdmcge1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbn1cbi5ob21lX19idG4ge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbn1cblxuLmdhbGxlcnkge1xuICBncmlkLWNvbHVtbjogZnVsbC1zdGFydC9mdWxsLWVuZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgNXZ3KTtcbiAgZ3JpZC1nYXA6IDEuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLmdhbGxlcnlfX2l0ZW0tLTEge1xuICBncmlkLXJvdzogMS9zcGFuIDI7XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcbn1cbi5nYWxsZXJ5X19pdGVtLS0yIHtcbiAgZ3JpZC1yb3c6IDEvc3BhbiAzO1xuICBncmlkLWNvbHVtbjogMy9zcGFuIDM7XG59XG4uZ2FsbGVyeV9faXRlbS0tMyB7XG4gIGdyaWQtcm93OiAxL3NwYW4gMjtcbiAgZ3JpZC1jb2x1bW46IDYvNztcbn1cbi5nYWxsZXJ5X19pdGVtLS00IHtcbiAgZ3JpZC1yb3c6IDEvc3BhbiAyO1xuICBncmlkLWNvbHVtbjogNy9zcGFuIDI7XG59XG4uZ2FsbGVyeV9faXRlbS0tNSB7XG4gIGdyaWQtcm93OiAzL3NwYW4gMztcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xufVxuLmdhbGxlcnlfX2l0ZW0tLTYge1xuICBncmlkLXJvdzogNC9zcGFuIDI7XG4gIGdyaWQtY29sdW1uOiAzL3NwYW4gMjtcbn1cbi5nYWxsZXJ5X19pdGVtLS03IHtcbiAgZ3JpZC1yb3c6IDQvNTtcbiAgZ3JpZC1jb2x1bW46IDUvNjtcbn1cbi5nYWxsZXJ5X19pdGVtLS04IHtcbiAgZ3JpZC1yb3c6IDMvc3BhbiAyO1xuICBncmlkLWNvbHVtbjogNi9zcGFuIDI7XG59XG4uZ2FsbGVyeV9faXRlbS0tOSB7XG4gIGdyaWQtcm93OiAzL3NwYW4gMztcbiAgZ3JpZC1jb2x1bW46IDgvLTE7XG59XG4uZ2FsbGVyeV9faXRlbS0tMTAge1xuICBncmlkLXJvdzogNi9zcGFuIDI7XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMTtcbn1cbi5nYWxsZXJ5X19pdGVtLS0xMSB7XG4gIGdyaWQtcm93OiA2L3NwYW4gMjtcbiAgZ3JpZC1jb2x1bW46IDIvc3BhbiAyO1xufVxuLmdhbGxlcnlfX2l0ZW0tLTEyIHtcbiAgZ3JpZC1yb3c6IDYvc3BhbiAyO1xuICBncmlkLWNvbHVtbjogNC9zcGFuIDE7XG59XG4uZ2FsbGVyeV9faXRlbS0tMTMge1xuICBncmlkLXJvdzogNS9zcGFuIDM7XG4gIGdyaWQtY29sdW1uOiA1L3NwYW4gMztcbn1cbi5nYWxsZXJ5X19pdGVtLS0xNCB7XG4gIGdyaWQtcm93OiA2L3NwYW4gMjtcbiAgZ3JpZC1jb2x1bW46IDgvc3BhbiAyO1xufVxuLmdhbGxlcnlfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDFkMmM7XG4gIGdyaWQtY29sdW1uOiBmdWxsLXN0YXJ0L2Z1bGwtZW5kO1xuICBwYWRkaW5nOiAxMHJlbTtcbn1cblxuLm5hdiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xuICBncmlkLWdhcDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZfX2xpbms6bGluaywgLm5hdl9fbGluazp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5uYXZfX2xpbms6aG92ZXIsIC5uYXZfX2xpbms6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iLCIlaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1kaXNwbGF5O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaGVhZGluZy0xIHtcbiAgQGV4dGVuZCAlaGVhZGluZztcblxuICBmb250LXNpemU6IDQuNXJlbTtcbiAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTE7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uaGVhZGluZy0yIHtcbiAgQGV4dGVuZCAlaGVhZGluZztcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICYtLWxpZ2h0IHtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMTtcbiAgfVxuXG4gICYtLWRhcmsge1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrLTE7XG4gIH1cbn1cblxuLmhlYWRpbmctMyB7XG4gIEBleHRlbmQgJWhlYWRpbmc7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkaW5nLTQge1xuICBAZXh0ZW5kICVoZWFkaW5nO1xuICBmb250LXNpemU6IDEuOXJlbTtcblxuICAmLS1saWdodCB7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTE7XG4gIH1cblxuICAmLS1kYXJrIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0xO1xuICB9XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWRpc3BsYXk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcbiAgfVxufVxuXG4ubWItc20ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWItbWQge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4ubWItbGcge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4ubWItaGcge1xuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xufVxuIiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgZ3JpZC1jb2x1bW46IHNpZGViYXItc3RhcnQgLyBzaWRlYmFyLWVuZDtcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLm5hdi1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0LjVyZW07XG4gIG1hcmdpbi10b3A6IDRyZW07XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogNC41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjNyZW0pO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2UpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4ycmVtKTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjByZW0pO1xuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcmstMTtcbiAgZ3JpZC1jb2x1bW46IGZ1bGwtc3RhcnQgLyBjb2wtZW5kIDY7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHJnYmEoJGNvbG9yLXNlY29uZGFyeSwgMC45MyksXG4gICAgcmdiYSgkY29sb3Itc2Vjb25kYXJ5LCAwLjkzKVxuICApLCB1cmwoLi4vYXNzZXRzL2ltZy9oZXJvLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gOHJlbSA4cmVtIDhyZW07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWlubWF4KG1pbi1jb250ZW50LCA2cmVtKSAxZnIgO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpO1xuICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgfVxuXG4gICZfX2xvZ28ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3NlZW5vbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19zZWVub24tbG9nb3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDNyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgfVxufVxuIiwiLnJlYWx0b3JzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA3IC8gZnVsbC1lbmQ7XG4gIHBhZGRpbmc6IDNyZW07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiA1dmg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX19zb2xkIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cbn1cbiIsIi5mZWF0dXJlcyB7XG4gIGdyaWQtY29sdW1uOiBjZW50ZXItc3RhcnQgLyBjZW50ZXItZW5kO1xuXG4gIG1hcmdpbjogMTVyZW0gMDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1cmVtLCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDZyZW07XG59XG5cbi5pY29uLXRhYmxlciB7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XG59XG5cbi5mZWF0dXJlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcbiAgZ3JpZC1yb3ctZ2FwOiAxLjVyZW07XG5cbiAgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbn1cbiIsIi5zdG9yeSB7XG4gICZfX3BpY3R1cmVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBncmlkLWNvbHVtbjogZnVsbC1zdGFydCAvIGNvbC1lbmQgNDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNSksXG4gICAgICAgIHJnYmEoJGNvbG9yLXByaW1hcnksIDAuNSlcbiAgICAgICksXG4gICAgICB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgICAgcGFkZGluZzogM3JlbTtcbiAgICB9XG4gIH1cblxuICAmX19pbWctLTEge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDQ7XG4gICAgYm94LXNoYWRvdzogMCA3cHggMzBweCAtMTBweCByZ2JhKDE1MCwgMTcwLCAxODAsIDAuNSk7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1tZWRpdW0pIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9faW1nLS0yIHtcbiAgICB3aWR0aDogMTE1JTtcblxuICAgIGdyaWQtcm93OiA0IC8gNjtcbiAgICBncmlkLWNvbHVtbjogNCAvIDc7XG4gICAgei1pbmRleDogMjA7XG4gICAgYm94LXNoYWRvdzogMCA3cHggMzBweCAtMTBweCByZ2JhKDE1MCwgMTcwLCAxODAsIDAuNSk7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1tZWRpdW0pIHtcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XG4gICAgICBncmlkLWNvbHVtbjogNCAvIDc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0xO1xuICAgIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNSAvIGZ1bGwtZW5kO1xuXG4gICAgcGFkZGluZzogNnJlbSA4dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgICAgZ3JpZC1yb3c6IDUgLyA2XG4gICAgfVxuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIH1cbn1cbiIsIi5ob21lcyB7XG4gIGdyaWQtY29sdW1uOiBjZW50ZXItc3RhcnQgLyBjZW50ZXItZW5kO1xuICBtYXJnaW46IDE1cmVtIDA7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNXJlbSwgMWZyKSk7XG4gIGdyaWQtZ2FwOiA3cmVtO1xufVxuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtcm93LWdhcDogMy41cmVtO1xuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5pY29uLXRhYmxlci1oZWFydCB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgei1pbmRleDogMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1kaXNwbGF5O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIHdpZHRoOiA4MCU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cblxuICAmX19sb2NhdGlvbixcbiAgJl9fcm9vbXMge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gICZfX2xvY2F0aW9uLFxuICAmX19yb29tcyxcbiAgJl9fYXJlYSxcbiAgJl9fcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiA0LjVyZW07XG4gICAgICBoZWlnaHQ6IDQuNXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19idG4ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIH1cbn1cbiIsIi5nYWxsZXJ5IHtcbiAgZ3JpZC1jb2x1bW46IGZ1bGwtc3RhcnQgLyBmdWxsLWVuZDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCA1dncpO1xuICBncmlkLWdhcDogMS41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgJl9faXRlbSB7XG4gICAgJi0tMSB7XG4gICAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICAgIH1cblxuICAgICYtLTIge1xuICAgICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDM7XG4gICAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMztcbiAgICB9XG5cbiAgICAmLS0zIHtcbiAgICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xuICAgICAgZ3JpZC1jb2x1bW46IDYgLyA3O1xuICAgIH1cblxuICAgICYtLTQge1xuICAgICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XG4gICAgICBncmlkLWNvbHVtbjogNyAvIHNwYW4gMjtcbiAgICB9XG5cbiAgICAmLS01IHtcbiAgICAgIGdyaWQtcm93OiAzIC8gc3BhbiAzO1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgfVxuXG4gICAgJi0tNiB7XG4gICAgICBncmlkLXJvdzogNCAvIHNwYW4gMjtcbiAgICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAyO1xuICAgIH1cblxuICAgICYtLTcge1xuICAgICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xuICAgIH1cblxuICAgICYtLTgge1xuICAgICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XG4gICAgICBncmlkLWNvbHVtbjogNiAvIHNwYW4gMjtcbiAgICB9XG5cbiAgICAmLS05IHtcbiAgICAgIGdyaWQtcm93OiAzIC8gc3BhbiAzO1xuICAgICAgZ3JpZC1jb2x1bW46IDggLyAtMTtcbiAgICB9XG5cbiAgICAmLS0xMCB7XG4gICAgICBncmlkLXJvdzogNiAvIHNwYW4gMjtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xuICAgIH1cblxuICAgICYtLTExIHtcbiAgICAgIGdyaWQtcm93OiA2IC8gc3BhbiAyO1xuICAgICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XG4gICAgfVxuXG4gICAgJi0tMTIge1xuICAgICAgZ3JpZC1yb3c6IDYgLyBzcGFuIDI7XG4gICAgICBncmlkLWNvbHVtbjogNCAvIHNwYW4gMTtcbiAgICB9XG5cbiAgICAmLS0xMyB7XG4gICAgICBncmlkLXJvdzogNSAvIHNwYW4gMztcbiAgICAgIGdyaWQtY29sdW1uOiA1IC8gc3BhbiAzO1xuICAgIH1cblxuICAgICYtLTE0IHtcbiAgICAgIGdyaWQtcm93OiA2IC8gc3BhbiAyO1xuICAgICAgZ3JpZC1jb2x1bW46IDggLyBzcGFuIDI7XG4gICAgfVxuICB9XG5cbiAgJl9faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICBncmlkLWNvbHVtbjogZnVsbC1zdGFydCAvIGZ1bGwtZW5kO1xuXG4gIHBhZGRpbmc6IDEwcmVtO1xufVxuXG4ubmF2IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX2xpbms6bGluayxcbiAgJl9fbGluazp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWRpc3BsYXk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICB9XG5cbiAgJl9fbGluazpob3ZlcixcbiAgJl9fbGluazphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgfVxufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodC0yO1xuICBtYXJnaW4tdG9wOiA2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************!*\
  !*** /home/ubuntu/WebstormProjects/Nexter/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.element.scss":
/*!******************************!*\
  !*** ./app/app.element.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app.element.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.element.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.element.ts":
/*!****************************!*\
  !*** ./app/app.element.ts ***!
  \****************************/
/*! exports provided: AppElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppElement", function() { return AppElement; });
/* harmony import */ var _app_element_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.element.scss */ "./app/app.element.scss");
/* harmony import */ var _app_element_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_element_scss__WEBPACK_IMPORTED_MODULE_0__);

class AppElement extends HTMLElement {
  connectedCallback() {
    const title = 'nexter';
    this.innerHTML = `
      <header class="flex">
    <img alt="Nx logo" width="75" src="https://nx.dev/assets/images/nx-logo-white.svg" />
    <h1>Welcome to ${title}!</h1>
</header>
<main>
    <h2>Resources &amp; Tools</h2>
    <p>
      Thank you for using and showing some ♥ for Nx.
    </p>
    <div class="flex github-star-container">
      <a href="https://github.com/nrwl/nx" target="_blank" rel="noopener noreferrer"> If you like Nx, please give it a star:
        <div class="github-star-badge">
          <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            Star
        </div>
      </a>
    </div>
    <p>
      Here are some links to help you get started.
    </p>
    <ul class="resources">
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://connect.nrwl.io/app/courses/nx-workspaces/intro"
            >
                Nx video course
            </a>
        </li>
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://nx.dev/angular/getting-started/what-is-nx"
            >
                Nx video tutorial
            </a>
        </li>
        <li class="col-span-2">
            <a
                    class="resource flex"
                    href="https://nx.dev/angular/tutorial/01-create-application"
            >
                Interactive tutorial
            </a>
        </li>
        <li class="col-span-2">
            <a class="resource flex" href="https://connect.nrwl.io/">
                <img
                        height="36"
                        alt="Nrwl Connect"
                        src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
                />
                <span class="gutter-left">Nrwl Connect</span>
            </a>
        </li>
    </ul>
    <h2>Next Steps</h2>
    <p>Here are some things you can do with Nx.</p>
    <details open>
        <summary>Add UI library</summary>
        <pre>
\`# Generate UI lib
nx g @nrwl/angular:lib ui

# Add a component
nx g @nrwl/angular:component xyz --project ui\`</pre
        >
    </details>
    <details>
        <summary>View dependency graph</summary>
        <pre>\`nx dep-graph\`</pre>
    </details>
    <details>
        <summary>Run affected commands</summary>
        <pre>
\`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
\`</pre
        >
    </details>
</main>
    `;
  }

}
AppElement.observedAttributes = [];
customElements.define('dennydharmawan-root', AppElement);

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.element.ts */ "./app/app.element.ts");


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/WebstormProjects/Nexter/apps/nexter/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=main.js.map