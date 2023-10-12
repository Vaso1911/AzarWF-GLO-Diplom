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

addAttrMenu()
addPhone()
headerMenu()
smoothScroll()
inputMaskTel()
modalPrivacy()
tabsRepairs()
sliderPorfolio()
popupFormula()
popupSliderPortfolio()
transparency()
