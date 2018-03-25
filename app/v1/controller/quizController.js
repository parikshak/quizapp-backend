
/* quizController */
var quizdata = {
  "Test": {
    "part": [
      {
        "id": "1",
        "heading": "Sample part 1 heading",
        "question": [
          {
            "title": "Sample Question in part 1",
            "answers": {
              "answer": [
                {
                  "@label": "Option answer 1",
                  "@value": "J"
                },
                {
                  "@label": "Option answer 2",
                  "@value": "P"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "2",
        "heading": "Sample part 2 heading",
        "question": [
          {
            "title": "Sample Question in part 2",
            "answers": {
              "answer": [
                {
                  "@label": "Option answer 1",
                  "@value": "J"
                },
                {
                  "@label": "Option answer 2",
                  "@value": "P"
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

var quizController = {


  loadQuestions: function (req, res, next) {
    res.json({data: quizdata})
  }
}

module.exports = quizController

