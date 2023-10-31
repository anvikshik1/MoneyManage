const verifyBearerToken = require('../middleware/authMiddleware');
const router = require("express").Router();
const expensesController = require("../controllers/expensesController");

router.get("/welcome", verifyBearerToken, expensesController.welcome);
router.post("/add-expenses", verifyBearerToken, expensesController.addExpense);
router.get("/all-expenses", verifyBearerToken, expensesController.getAllExpenses);
router.post("/filter-expenses", verifyBearerToken, expensesController.getExpensesByDate);
router.post("/filter-expenses-by-month", verifyBearerToken, expensesController.getExpensesByMonth);
router.post("/filter-expenses-by-date-range", verifyBearerToken, expensesController.getExpnsesBeetweenDateRange);
router.get("/all-expenses/:id", verifyBearerToken, expensesController.getExpenses);
router.put("/all-expenses/:id", verifyBearerToken, expensesController.editExpenses);
router.delete("/all-expenses/:id", verifyBearerToken, expensesController.deleteExpenses);

module.exports = router;