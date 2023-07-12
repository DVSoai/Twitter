import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();
// Tweet CRUD

//create Tweet
router.post("/", async (req, res) => {
  const { content, image } = req.body;
  // @ts-ignore
  const user = req.user;

  try {
    const result = await prisma.tweet.create({
      data: {
        content,
        image,
        userId: user.id,
      },
      include: { user: true },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Username and email should be unique" });
  }
});

//list Tweets
router.get("/", async (req, res) => {
  const allTweets = await prisma.tweet.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        },
      },
    },
  });

  res.json(allTweets);
});

// get one Tweet
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tweetContent = await prisma.tweet.findUnique({
    where: { id: Number(id) },
    include: { user: true },
  });
  if (!tweetContent) {
    return res.status(404).json({ error: "Tweet not found" });
  }
  res.json(tweetContent);
});

// update Tweet
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

//delete Tweet
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.tweet.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

export default router;