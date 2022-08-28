Feature: FairPrice HomePage

            I want to be able to submit a quote

        @Home @validate @TC_HOME_001
        
        Scenario: I Want to visit promotions tab and validate some labels
            Given I open NTUC FairPrice Web
             When I click promotion tab
             Then I verify PWP tab
             Then I verify Weekly Deals tab
              And I verify Digital Club Exclusive tab
              And I click all tab
             Then I click PWP tab
             Then I verify PWP label in list product        