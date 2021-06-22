it('doesnt work', () => {
  cy.intercept({
    method: 'POST',
    url: '/posts'}).as('getUrl');

  const payload = {
    "isQuiz": false,
    "questions": [
      {
        "active": false,
        "advancedDropdownDisplayType": "HorizontalBarsAvg",
        "allowMultipleVotes": false,
        "allowRankingPoolSize": false,
        "allowSelectMultipleOptions": false,
        "correctAnswers": {
          "allow": false,
          "show": false
        },
        "description": null,
        "image": {
          "uuid": null
        },
        "inputType": "Ranking",
        "isAddQuestionPlaceholder": false,
        "isDescriptionExpanded": false,
        "isProfanityFilterEnabled": true,
        "maxCharsEnabled": false,
        "maxRating": 5,
        "maxSelectableOptions": 1,
        "options": [
          {
            "isCorrect": false,
            "label": "BUBO (Búchaná Borovička)",
            "order": 0,
            "votesCount": 0,
            "votesPercentage": 0
          },
          {
            "isCorrect": false,
            "label": "ŠABUBO (Šampanské Burčák Borovička)",
            "order": 1,
            "votesCount": 0,
            "votesPercentage": 0
          },
          {
            "isCorrect": false,
            "label": "Grepovička",
            "order": 2,
            "votesCount": 0,
            "votesPercentage": 0
          },
          {
            "isCorrect": false,
            "label": "B12 (Borovička Pivo)",
            "order": 3,
            "votesCount": 0,
            "votesPercentage": 0
          },
          {
            "isCorrect": false,
            "label": "Čistá Borovička",
            "order": 4,
            "votesCount": 0,
            "votesPercentage": 0
          }
        ],
        "order": 0,
        "randomizeOptions": false,
        "rankingPoolSize": null,
        "results": {
          "displayType": "HorizontalBarsAvg"
        },
        "timer": {
          "enabled": false,
          "votingTime": 20000
        },
        "timerSecondsValue": 20,
        "title": "Rank by popularity",
        "votesLimit": -1
      }
    ],
    "sectionUuid": "37f6fc48-6509-41c2-ba0b-ad6db9886abe",
    "showResults": true,
    "title": null,
    "active": false,
    "order": 0
  }

  cy.visit('http://localhost:3000/');
  cy.window().then((win) => {
    const xhr = new win.XMLHttpRequest();
    xhr.open('POST', '/posts');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
  });

  cy.wait('@getUrl').then( ({ request }) => {

    console.log(request.body)

  })
});
