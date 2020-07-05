$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateProcess.feature");
formatter.feature({
  "line": 2,
  "name": "Create a process",
  "description": "",
  "id": "create-a-process",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regressive"
    }
  ]
});
formatter.before({
  "duration": 33514886300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on Agapito Server page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Process menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on new process button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills \"processo_vara\" with the value equal \"299311\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills \"processo_numero_processo\" with the value equal \"987\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills \"processo_natureza\" with the value equal \"comercial\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills \"processo_partes\" with the value equal \"teste de parte\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user selects urgency with the value equal \"Sim\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on arbitramento equals \"Sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user fills \"processo_assistente_social\" with the value equal \"Bruno Cesar Rodrigues\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user fills \"processo_data_entrada\" with the value equal \"29/11/2019\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user fills \"processo_status\" with the value equal \"Em análise\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user fills \"processo_observacao\" with the value equal \"Teste Observação\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.theUserIsOnAgapitoServerPage()"
});
formatter.result({
  "duration": 7899141900,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnProcessMenu()"
});
formatter.result({
  "duration": 4329030800,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnNewProcessButton()"
});
formatter.result({
  "duration": 8298139400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_vara",
      "offset": 16
    },
    {
      "val": "299311",
      "offset": 53
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 2177394200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_numero_processo",
      "offset": 16
    },
    {
      "val": "987",
      "offset": 64
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 339786300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_natureza",
      "offset": 16
    },
    {
      "val": "comercial",
      "offset": 57
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 350987300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_partes",
      "offset": 16
    },
    {
      "val": "teste de parte",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 430049600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 614224700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 123906700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_assistente_social",
      "offset": 16
    },
    {
      "val": "Bruno Cesar Rodrigues",
      "offset": 66
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 488130300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_data_entrada",
      "offset": 16
    },
    {
      "val": "29/11/2019",
      "offset": 61
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 395784000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 16
    },
    {
      "val": "Em análise",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 407840500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_observacao",
      "offset": 16
    },
    {
      "val": "Teste Observação",
      "offset": 59
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 457100500,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 1098308600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a process",
  "description": "",
  "id": "create-a-process;create-a-process",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@createProcess"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the user should see \"Processo foi criado com sucesso.\" into view process page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Processo foi criado com sucesso.",
      "offset": 21
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeIntoViewProcessPage(String)"
});
formatter.result({
  "duration": 86655200,
  "status": "passed"
});
formatter.write("url: http://agapito-server.herokuapp.com/processos/1819");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 15459691700,
  "status": "passed"
});
formatter.before({
  "duration": 8627933100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on Agapito Server page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Process menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on new process button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills \"processo_vara\" with the value equal \"299311\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills \"processo_numero_processo\" with the value equal \"987\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills \"processo_natureza\" with the value equal \"comercial\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills \"processo_partes\" with the value equal \"teste de parte\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user selects urgency with the value equal \"Sim\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on arbitramento equals \"Sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user fills \"processo_assistente_social\" with the value equal \"Bruno Cesar Rodrigues\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user fills \"processo_data_entrada\" with the value equal \"29/11/2019\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user fills \"processo_status\" with the value equal \"Em análise\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user fills \"processo_observacao\" with the value equal \"Teste Observação\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.theUserIsOnAgapitoServerPage()"
});
formatter.result({
  "duration": 4544851400,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnProcessMenu()"
});
formatter.result({
  "duration": 16982377400,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnNewProcessButton()"
});
formatter.result({
  "duration": 7712815200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_vara",
      "offset": 16
    },
    {
      "val": "299311",
      "offset": 53
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 434739400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_numero_processo",
      "offset": 16
    },
    {
      "val": "987",
      "offset": 64
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 188982500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_natureza",
      "offset": 16
    },
    {
      "val": "comercial",
      "offset": 57
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 342918400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_partes",
      "offset": 16
    },
    {
      "val": "teste de parte",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 202119300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 196941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 202851400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_assistente_social",
      "offset": 16
    },
    {
      "val": "Bruno Cesar Rodrigues",
      "offset": 66
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 270964100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_data_entrada",
      "offset": 16
    },
    {
      "val": "29/11/2019",
      "offset": 61
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 165626600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 16
    },
    {
      "val": "Em análise",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 225555700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_observacao",
      "offset": 16
    },
    {
      "val": "Teste Observação",
      "offset": 59
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 274136400,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 944534800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "check fields on the process grid.",
  "description": "",
  "id": "create-a-process;check-fields-on-the-process-grid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "the user clicks on back button into process show page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user should see last code on the process grid page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the user should see \"vara\" with value \"299311\" on the process grid page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user should see \"natureza\" with value \"comercial\" on the process grid page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user should see \"partes\" with value \"teste de parte\" on the process grid page",
  "keyword": "And "
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnBackButtonIntoProcessShowPage()"
});
formatter.result({
  "duration": 98565100,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserShouldSeeLastCodeOnTheProcessGridPage()"
});
formatter.result({
  "duration": 9772897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vara",
      "offset": 21
    },
    {
      "val": "299311",
      "offset": 39
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeWithValueOnTheProcessGridPage(String,String)"
});
formatter.result({
  "duration": 41168800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "natureza",
      "offset": 21
    },
    {
      "val": "comercial",
      "offset": 43
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeWithValueOnTheProcessGridPage(String,String)"
});
formatter.result({
  "duration": 37367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "partes",
      "offset": 21
    },
    {
      "val": "teste de parte",
      "offset": 41
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeWithValueOnTheProcessGridPage(String,String)"
});
formatter.result({
  "duration": 38888900,
  "status": "passed"
});
formatter.write("url: http://agapito-server.herokuapp.com/processos");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 19154745200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Update a Process",
  "description": "",
  "id": "create-a-process;update-a-process",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@testeOutlineUpdate"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user clicks on back button into process show page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on edit process button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user fill \"processo_status\" with value equal vara \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user selects urgency with the value equal \"Não\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on arbitramento equals \"Não\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user should see \"Processo atualizado com sucesso.\" into view process page",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "create-a-process;update-a-process;",
  "rows": [
    {
      "cells": [
        "status"
      ],
      "line": 42,
      "id": "create-a-process;update-a-process;;1"
    },
    {
      "cells": [
        "Finalizado"
      ],
      "line": 43,
      "id": "create-a-process;update-a-process;;2"
    },
    {
      "cells": [
        "Indeferido"
      ],
      "line": 44,
      "id": "create-a-process;update-a-process;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5773198500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on Agapito Server page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Process menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on new process button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills \"processo_vara\" with the value equal \"299311\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills \"processo_numero_processo\" with the value equal \"987\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills \"processo_natureza\" with the value equal \"comercial\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills \"processo_partes\" with the value equal \"teste de parte\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user selects urgency with the value equal \"Sim\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on arbitramento equals \"Sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user fills \"processo_assistente_social\" with the value equal \"Bruno Cesar Rodrigues\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user fills \"processo_data_entrada\" with the value equal \"29/11/2019\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user fills \"processo_status\" with the value equal \"Em análise\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user fills \"processo_observacao\" with the value equal \"Teste Observação\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.theUserIsOnAgapitoServerPage()"
});
formatter.result({
  "duration": 7888431200,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnProcessMenu()"
});
formatter.result({
  "duration": 2835203200,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnNewProcessButton()"
});
formatter.result({
  "duration": 4731802900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_vara",
      "offset": 16
    },
    {
      "val": "299311",
      "offset": 53
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 452363000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_numero_processo",
      "offset": 16
    },
    {
      "val": "987",
      "offset": 64
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 115748300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_natureza",
      "offset": 16
    },
    {
      "val": "comercial",
      "offset": 57
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 175759600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_partes",
      "offset": 16
    },
    {
      "val": "teste de parte",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 169758600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 114033200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 78248500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_assistente_social",
      "offset": 16
    },
    {
      "val": "Bruno Cesar Rodrigues",
      "offset": 66
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 210901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_data_entrada",
      "offset": 16
    },
    {
      "val": "29/11/2019",
      "offset": 61
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 250888300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 16
    },
    {
      "val": "Em análise",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 189850300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_observacao",
      "offset": 16
    },
    {
      "val": "Teste Observação",
      "offset": 59
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 381547100,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 1121674600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Update a Process",
  "description": "",
  "id": "create-a-process;update-a-process;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressive"
    },
    {
      "line": 31,
      "name": "@testeOutlineUpdate"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user clicks on back button into process show page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on edit process button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user fill \"processo_status\" with value equal vara \"Finalizado\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user selects urgency with the value equal \"Não\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on arbitramento equals \"Não\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user should see \"Processo atualizado com sucesso.\" into view process page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnBackButtonIntoProcessShowPage()"
});
formatter.result({
  "duration": 216273900,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnEditProcessButton()"
});
formatter.result({
  "duration": 5279129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 15
    },
    {
      "val": "Finalizado",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithValueEqualVara(String,String)"
});
formatter.result({
  "duration": 489858600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 106398400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 105305200,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 983367700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Processo atualizado com sucesso.",
      "offset": 21
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeIntoViewProcessPage(String)"
});
formatter.result({
  "duration": 87717500,
  "status": "passed"
});
formatter.write("url: http://agapito-server.herokuapp.com/processos/1821");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 4368001500,
  "status": "passed"
});
formatter.before({
  "duration": 7278402900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on Agapito Server page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Process menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on new process button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills \"processo_vara\" with the value equal \"299311\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills \"processo_numero_processo\" with the value equal \"987\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills \"processo_natureza\" with the value equal \"comercial\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills \"processo_partes\" with the value equal \"teste de parte\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user selects urgency with the value equal \"Sim\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on arbitramento equals \"Sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user fills \"processo_assistente_social\" with the value equal \"Bruno Cesar Rodrigues\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user fills \"processo_data_entrada\" with the value equal \"29/11/2019\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user fills \"processo_status\" with the value equal \"Em análise\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user fills \"processo_observacao\" with the value equal \"Teste Observação\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.theUserIsOnAgapitoServerPage()"
});
formatter.result({
  "duration": 3827305000,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnProcessMenu()"
});
formatter.result({
  "duration": 313144800,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnNewProcessButton()"
});
formatter.result({
  "duration": 5706694200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_vara",
      "offset": 16
    },
    {
      "val": "299311",
      "offset": 53
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 476224700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_numero_processo",
      "offset": 16
    },
    {
      "val": "987",
      "offset": 64
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 176855200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_natureza",
      "offset": 16
    },
    {
      "val": "comercial",
      "offset": 57
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 227529900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_partes",
      "offset": 16
    },
    {
      "val": "teste de parte",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 325379100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 232268600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 173687100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_assistente_social",
      "offset": 16
    },
    {
      "val": "Bruno Cesar Rodrigues",
      "offset": 66
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 316268800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_data_entrada",
      "offset": 16
    },
    {
      "val": "29/11/2019",
      "offset": 61
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 214967100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 16
    },
    {
      "val": "Em análise",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 225056900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_observacao",
      "offset": 16
    },
    {
      "val": "Teste Observação",
      "offset": 59
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 264788400,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 1201908600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Update a Process",
  "description": "",
  "id": "create-a-process;update-a-process;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regressive"
    },
    {
      "line": 31,
      "name": "@testeOutlineUpdate"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user clicks on back button into process show page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on edit process button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user fill \"processo_status\" with value equal vara \"Indeferido\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user selects urgency with the value equal \"Não\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on arbitramento equals \"Não\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user should see \"Processo atualizado com sucesso.\" into view process page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnBackButtonIntoProcessShowPage()"
});
formatter.result({
  "duration": 257940800,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnEditProcessButton()"
});
formatter.result({
  "duration": 6116043900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 15
    },
    {
      "val": "Indeferido",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithValueEqualVara(String,String)"
});
formatter.result({
  "duration": 490519800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 149094100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 84706600,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 816568100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Processo atualizado com sucesso.",
      "offset": 21
    }
  ],
  "location": "ProcessSteps.theUserShouldSeeIntoViewProcessPage(String)"
});
formatter.result({
  "duration": 59805500,
  "status": "passed"
});
formatter.write("url: http://agapito-server.herokuapp.com/processos/1822");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2975137200,
  "status": "passed"
});
formatter.before({
  "duration": 8533268000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the user is on Agapito Server page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on Process menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on new process button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user fills \"processo_vara\" with the value equal \"299311\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user fills \"processo_numero_processo\" with the value equal \"987\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user fills \"processo_natureza\" with the value equal \"comercial\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user fills \"processo_partes\" with the value equal \"teste de parte\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user selects urgency with the value equal \"Sim\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on arbitramento equals \"Sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user fills \"processo_assistente_social\" with the value equal \"Bruno Cesar Rodrigues\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user fills \"processo_data_entrada\" with the value equal \"29/11/2019\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user fills \"processo_status\" with the value equal \"Em análise\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user fills \"processo_observacao\" with the value equal \"Teste Observação\" on the process page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on save button on the process page",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.theUserIsOnAgapitoServerPage()"
});
formatter.result({
  "duration": 5500922000,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnProcessMenu()"
});
formatter.result({
  "duration": 641706300,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnNewProcessButton()"
});
formatter.result({
  "duration": 5446365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_vara",
      "offset": 16
    },
    {
      "val": "299311",
      "offset": 53
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 920837500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_numero_processo",
      "offset": 16
    },
    {
      "val": "987",
      "offset": 64
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 209972300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_natureza",
      "offset": 16
    },
    {
      "val": "comercial",
      "offset": 57
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 295766400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_partes",
      "offset": 16
    },
    {
      "val": "teste de parte",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 385814600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 47
    }
  ],
  "location": "ProcessSteps.theUserSelectsUrgencyWithTheValueEqualOnTheProcessPage(String)"
});
formatter.result({
  "duration": 236225700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 40
    }
  ],
  "location": "ProcessSteps.theUserClicksOnArbitramentoEquals(String)"
});
formatter.result({
  "duration": 172312400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_assistente_social",
      "offset": 16
    },
    {
      "val": "Bruno Cesar Rodrigues",
      "offset": 66
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 477753100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_data_entrada",
      "offset": 16
    },
    {
      "val": "29/11/2019",
      "offset": 61
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 371435000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_status",
      "offset": 16
    },
    {
      "val": "Em análise",
      "offset": 55
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 391323900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "processo_observacao",
      "offset": 16
    },
    {
      "val": "Teste Observação",
      "offset": 59
    }
  ],
  "location": "ProcessSteps.theUserFillWithTheValueEqualOnTheProcessPage(String,String)"
});
formatter.result({
  "duration": 420572600,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnSaveButtonOnTheProcessPage()"
});
formatter.result({
  "duration": 1071818100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Delete a process.",
  "description": "",
  "id": "create-a-process;delete-a-process.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@deleteProcess"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "the user clicks on back button into process show page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the user clicks on delete button process button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user confirms delete",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the user should not see last process code",
  "keyword": "Then "
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnBackButtonIntoProcessShowPage()"
});
formatter.result({
  "duration": 3777611800,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserClicksOnDeleteButtonProcessButton()"
});
formatter.result({
  "duration": 7478339900,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.theUserConfirmsDelete()"
});
formatter.result({
  "duration": 63702300,
  "status": "passed"
});
formatter.match({
  "location": "ProcessSteps.theUserShouldNotSeeLastProcessCode()"
});
formatter.result({
  "duration": 6146943000,
  "status": "passed"
});
formatter.write("url: http://agapito-server.herokuapp.com/processos");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3449316700,
  "status": "passed"
});
});