import { PrismaClient } from '../app/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Create some members
  const bilbo = await prisma.member.create({
    data: {
      firstName: 'Bilbo',
      lastName: 'Baggins',
      birthDate: new Date('2890-09-22'),
      gender: 'Male',
      email: 'bilbo@example.com',
      phone: '123-456-7890',
    },
  });

  const frodo = await prisma.member.create({
    data: {
      firstName: 'Frodo',
      lastName: 'Baggins',
      birthDate: new Date('2968-09-22'),
      gender: 'Male',
      email: 'frodo@example.com',
      phone: '987-654-3210',
    },
  });
    const samwise = await prisma.member.create({
    data: {
      firstName: 'Samewise',
      lastName: 'Gamgee',
      birthDate: new Date('2980-04-06'),
      gender: 'Male',
      email: 'samwise@example.com',
      phone: '987-654-3210',
    },
  });
    const rosie = await prisma.member.create({
    data: {
      firstName: 'Rosie',
      lastName: 'Cotton',
      birthDate: new Date('2984-04-06'),
      gender: 'Female',
      email: 'rosie@example.com',
      phone: '987-654-3210',
    },
  });
  
  // Add a spouse relationship
  await prisma.spouse.create({
    data: {
      spouse1Id: samwise.id,
      spouse2Id: rosie.id,
      marriedAt: new Date('2005-06-20'),
    },
  });

  // Add a child
  const elanor = await prisma.member.create({
    data: {
      firstName: 'Elanor',
      lastName: 'Gamgee',
      birthDate: new Date('3021-03-25'),
      gender: 'Female',
      email: 'elanor@example.com',
      phone: '987-654-3210',
    },
  });

  // Add parent relationships
  await prisma.parent.createMany({
    data: [
      { parentId: rosie.id, childId: elanor.id },
      { parentId: samwise.id, childId: elanor.id },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });