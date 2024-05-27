# k6-parsing-error

This repository is a minimal reproduction of a parsing error that occurs when trying to read a plain text response in a k6 script. **Error only occur when the response starts with leading zero.**
[Link to the issue reported](https://github.com/grafana/k6/issues/3758).

## Prerequisites

- Node.js
- Yarn
- k6

## Steps to reproduce

1. Clone this repository
2. Run `yarn install` in the root of the repository to install the dependencies
3. Run `k6 run tests/k6-script-json.js` or `k6 run tests/k6-script-plain.js` to run the k6 script (there are two versions of the script, one where the data is returned and read from a JSON file and one where the data is returned and read from a plain text file)
4. Observe the error in the output of `k6 run tests/k6-script-plain.js` (the JSON version works fine).
