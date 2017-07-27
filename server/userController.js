module.exports = {
  virgo: function(req, res, next){
      const db = req.app.get('db');
      db.get_virgo()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    taurus: function(req, res, next){
      const db = req.app.get('db');
      db.get_taurus()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    scorpio: function(req, res, next){
      const db = req.app.get('db');
      db.get_scorpio()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    sagi: function(req, res, next){
      const db = req.app.get('db');
      db.get_sagi()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    pisces: function(req, res, next){
      const db = req.app.get('db');
      db.get_pisces()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    libra: function(req, res, next){
      const db = req.app.get('db');
      db.get_libra()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    cap: function(req, res, next){
      const db = req.app.get('db');
      db.get_cap()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    can: function(req, res, next){
      const db = req.app.get('db');
      db.get_can()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    aries: function(req, res, next){
      const db = req.app.get('db');
      db.get_aries()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    aqua: function(req, res, next){
      const db = req.app.get('db');
      db.get_aqua()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    leo: function(req, res, next){
      const db = req.app.get('db');
      db.get_leo()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
    gem: function(req, res, next){
      const db = req.app.get('db');
      db.get_gem()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
  },
  
};
