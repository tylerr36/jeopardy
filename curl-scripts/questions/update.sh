#!/bin/bash

API="http://localhost:4741"
URL_PATH="/questions"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "question": {
      "question_text": "'"${QUESTION}"'",
      "answer": "'"${ANSWER}"'",
      "points": "'"${POINTS}"'"
    }
  }'

echo
