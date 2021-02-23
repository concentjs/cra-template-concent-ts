// you should declare all models here then expose it
import counterModel from 'features/counter/model';
import globalModel from './global';



const allModels = {
  ...globalModel,
  ...counterModel,
  // clone counterModel to a new module named ClonedModOfCounter
  ClonedModOfCounter: counterModel.Counter,
};

export default allModels;
