const headers = {
  Accept: "application/json, text/plain",
  "Content-Type": "application/json;charset=UTF-8",
};
const endPointCheck =
  "https://dz809p0sxd.execute-api.eu-west-3.amazonaws.com/prod/check-molecule";
const endPointParse =
  "https://dz809p0sxd.execute-api.eu-west-3.amazonaws.com/prod/parse-molecule";

export function check(molecule) {
  return fetch(endPointCheck, {
    headers: headers,
    method: "POST",
    body: JSON.stringify({ molecule }),
  });
}

export function parse(molecule) {
  return fetch(endPointParse, {
    headers: headers,
    method: "POST",
    body: JSON.stringify({ molecule }),
  });
}
