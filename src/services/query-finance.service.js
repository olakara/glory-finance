const express = require('express');
const debug = require('debug')('app:finance:query-service');
const { PrismaClient } = require('@prisma/client');



async function getAllExpenses() {

    const prisma = new PrismaClient();
    const allExpenses = await prisma.expenses.findMany();
    console.log(allExpenses);
    await prisma.$disconnect()
    return allExpenses;
}

async function getExpenseById(id) {

    const idAsInt = parseInt(id);
    const prisma = new PrismaClient();
    const expense = await prisma.expenses.findUnique({
        where: {
            id: idAsInt,
        }
    });

    console.log(expense);
    await prisma.$disconnect()
    return expense;

}


module.exports = { getAllExpenses, getExpenseById };