export default function handler(req, res) {
  res.status(200).json([
    { id: 1, email: "javi@javi", password: "javi" },
    { id: 2, email: "lara@lara", password: "lara" },
]);
}
