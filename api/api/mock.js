const issues = [
  {
    "id": 101,
    "typeName": "TASK",
    "summary": "[TECH] Move HPAC call to store",
    "priorityId": "LOW",
    "done": false,
    "statusName": "BACKLOG",
    "projectId": 1000
  },
  {
    "id": 102,
    "typeName": "BUG",
    "summary": "Vertical scroll of smartphone version is too sensitive",
    "priorityId": "MEDIUM",
    "done": false,
    "statusName": "IN_PROGRESS",
    "projectId": 2000
  },
  {
    "id": 103,
    "typeName": "STORY",
    "summary": "Implement availability check for congstar and enable Exposure through TARDIS",
    "priorityId": "HIGH",
    "done": false,
    "statusName": "IN_PROGRESS",
    "projectId": 1000
  },
  {
    "id": 104,
    "typeName": "STORY",
    "summary": "Adjustments for search fields",
    "priorityId": "MEDIUM",
    "done": true,
    "statusName": "CLOSED",
    "projectId": 2000
  }
];

module.exports = { issues };
