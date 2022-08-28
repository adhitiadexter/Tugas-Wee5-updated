import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

const Homepage = require('../../../support/pages/Hpage');
let homepage = new Homepage();

//validate PWP label
Given(/^I open NTUC FairPrice Web$/, () =>{
    homepage.visit('/');
})

When(/^I click promotion tab$/, (tab) => {
    homepage.tab_promotions(tab);
})

Then(/^I verify PWP tab$/, (pwp) => {
    homepage.pwp_tab(pwp);
})

Then(/^I verify Weekly Deals tab$/, (week) => {
    homepage.weekly_tab(week);
})

And(/^I verify Digital Club Exclusive tab$/, (digi) => {
    homepage.digital_tab(digi);
})

And(/^I click all tab$/, (all) => {
    homepage.click_all(all);
})

Then(/^I click PWP tab$/, (pwptab) => {
    homepage.click_pwp(pwptab);
})

Then(/^I verify PWP label in list product$/, (pwp_lab) => {
    homepage.pwp_label(pwp_lab);
})