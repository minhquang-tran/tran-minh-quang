// src/routes/resourceRoutes.ts
import { Router, Request, Response } from 'express';
import Resource from '../models/resource';

const router = Router();

// Create a resource
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = new Resource({ name, description });
    const savedResource = await resource.save();
    res.status(201).json(savedResource);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the resource' });
  }
});

// List resources with basic filters
router.get('/', async (req: Request, res: Response) => {
  try {
    const resources = await Resource.find().exec();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch resources' });
  }
});

// Get details of a resource
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findById(req.params.id).exec();
    if (!resource) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the resource' });
  }
});

// Update resource details
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).exec();
    if (!updatedResource) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the resource' });
  }
});

// Delete a resource
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedResource = await Resource.findByIdAndRemove(req.params.id).exec();
    if (!deletedResource) {
      res.status(404).json({ error: 'Resource not found' });
      return;
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the resource' });
  }
});

export default router;