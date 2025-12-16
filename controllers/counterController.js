let count = 0;

exports.getCount = (req, res) => res.json({ count });

exports.increment = (req, res) => {
  const step = Number(req.query.step) || 1;
  count += step;
  res.json({ count });
};

exports.reset = (req, res) => {
  count = 0;
  res.json({ count });
};

exports.setCount = (req, res) => {
  const { value } = req.body;
  if (typeof value !== 'number') {
    return res.status(400).json({ error: 'Value must be number' });
  }
  count = value;
  res.json({ count });
};
