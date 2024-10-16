const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// @route POST /services
// @desc Add a new healthcare service
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({ error: 'Please provide a name and price for the service' });
  }

  try {
    const newService = new Service({
      name,
      description,
      price
    });
    
    const savedService = await newService.save();
    res.json(savedService);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// @route GET /services
// @desc Get all healthcare services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({});
    
    res.json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const services = await Service.findById(req.params.id);
      res.json(services);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  });

// @route PUT /services/:id
// @desc Update an existing service
router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Update service fields
    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;

    const updatedService = await service.save();
    res.json(updatedService);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route DELETE /services/:id
// @desc Delete a healthcare service


router.delete('/:id', async (req, res) => {
    try {
        // Use findByIdAndDelete instead of service.remove
        const service = await Service.findByIdAndDelete(req.params.id);
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
