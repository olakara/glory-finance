const express = require('express');
const router = express.Router();
const debug = require('debug')('app:finance:router');
const queryService = require('../services/query-finance.service');
const updateService = require('../services/update-finance.service');

router.get('/', async (req, res) => {
    const vm = await queryService.getAllExpenses()
    res.json(vm);
});

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    const vm = await queryService.getExpenseById(id)
    res.json(vm);
});

// Approve expense report
router.put('/:id/approve', async (req, res) => {
    const id = req.params.id;
    res.json(await updateService.approveExpense(id));
});

// Reject expense report
router.put('/:id/reject', async (req, res) => {
    const id = req.params.id;
    res.json(await updateService.rejectExpense(id));
});

module.exports = router;