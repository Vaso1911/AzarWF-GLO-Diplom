import './main.scss';
import { addAttrMenu } from './modules/addAttr';
import { addPhone } from "./modules/addPhone"
import { headerMenu } from './modules/headerMenu';
import { inputMaskTel } from './modules/inputMaskTel';
import { modalPrivacy } from './modules/modalPrivacy';
import { popupFormula } from './modules/sectionFormula/popupFormula';
import { sliderPorfolio } from './modules/sectionPortfolio/sliderPortfolio';
import { smoothScroll } from './modules/smoothScroll';
import {tabsRepairs}  from './modules/sectionTypesReapirs/tabsRepairs'
import { popupSliderPortfolio } from './modules/sectionPortfolio/_sliderPopup';
import { transparency } from './modules/sectionTranspareency/transparency';
import { reviews } from './modules/sectionsReviews/reviews';
import { consultation } from './modules/consultation';
import { popupRepairs } from './modules/sectionTypesReapirs/popupRepairs';
import { accordion } from './modules/sectionFAQ/accordion';

addAttrMenu()
addPhone()
headerMenu()
smoothScroll()
inputMaskTel()
modalPrivacy()
tabsRepairs()
popupRepairs()
sliderPorfolio()
popupFormula()
popupSliderPortfolio()
transparency()
reviews()
consultation()
accordion()