const express = require('express');
const debug = require('debug')('app:expense-tracker:update-service');
const { UserException } = require('../shared/exceptions');
const { sendNotification } = require('../shared/queue.service');
const { PrismaClient } = require('@prisma/client');


async function approveExpense(id) {

    const prisma = new PrismaClient();

    try {

        const idAsInt = parseInt(id);
        await prisma.expenses.update({
            where: {
                id: idAsInt,
            },
            data: {
                "status": 'APPROVED',
                "actionBy": "SYSTEM"
            }
        });

        // const notifcationForInitiator = {
        //     expenseReferenceId: ObjectId(id),
        //     message: `Your expense request (${expense.title}) was approved by finance`,
        //     createDate: new Date().toISOString()
        // }

        // await sendNotification(notifcationForInitiator);

    } catch (error) {
        debug(error.stack);
    }
    await prisma.$disconnect()
}

async function rejectExpense(id) {


    const prisma = new PrismaClient();

    try {

        const idAsInt = parseInt(id);
        await prisma.expenses.update({
            where: {
                id: idAsInt,
            },
            data: {
                "status": 'REJECTED',
                "actionBy": "SYSTEM"
            }
        });

        // const notifcationForInitiator = {
        //     expenseReferenceId: ObjectId(id),
        //     message: `Your expense request (${expense.title}) was rejected by finance`,
        //     createDate: new Date().toISOString()
        // }

        // await sendNotification(notifcationForInitiator);

    } catch (error) {
        debug(error.stack);
    }
    await prisma.$disconnect();

}


module.exports = { approveExpense, rejectExpense };