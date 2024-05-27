import http from "k6/http";
import { check } from "k6";

export let options = {
  iterations: 1,
  vus: 1,
  duration: "1s",
};

// =====================
// = Setup of the test =
// =====================
// return response as plain text (json=0) and with leading zero (leading=1)
export default function () {
  const url = "http://localhost:3001/mock?json=0&leading=1";
  const res = http.get(url);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  check(res.json(), {
    "response is correct": (json) => json === "01",
  });
}
