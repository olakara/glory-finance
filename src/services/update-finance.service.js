const express = require('express');
const debug = require('debug')('app:expense-tracker:update-service');
const { UserException } = require('../shared/exceptions');
const { sendNotification } = require('../shared/queue.service');
const { PrismaClient } = require('@prisma/client');


async function approveExpense(id) {


    try {

        // TODO : Get the expense from the DB
        const expense = {};

        await db.collection('expenses').updateOne({ "_id": ObjectId(id) },
            {
                $set: {
                    "status": 'APPROVED',
                    "actionBy": "SYSTEM"
                }
            });

        const notifcationForInitiator = {
            expenseReferenceId: ObjectId(id),
            message: `Your expense request (${expense.title}) was approved by finance`,
            createDate: new Date().toISOString()
        }

        await sendNotification(notifcationForInitiator);


    } catch (error) {
        debug(error.stack);
    }
}

async function rejectExpense(id) {


    try {

        // TODO : Get the expense from the DB

        const notifcationForInitiator = {
            expenseReferenceId: ObjectId(id),
            message: `Your expense request (${expense.title}) was rejected by finance`,
            createDate: new Date().toISOString()
        }

        await sendNotification(notifcationForInitiator);

    } catch (error) {
        debug(error.stack);
    }
    client.close();

}


module.exports = { approveExpense, rejectExpense };