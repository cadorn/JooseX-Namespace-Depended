var declared = false;
try {
    declared = typeof StressTest.Test098 == 'function';
} catch(e) {}
if (declared && StressTest.Test098.meta.constructor == Joose.Meta.Class) {
    __global__.doubleDeclarations = true;
    throw "Double declaration of StressTest.Test098";
}
Class('StressTest.Test098', {
    version: 0.1,
    use: [{
        'Module': 'StressTest.Test100'
    },
    {
        'Module': 'StressTest.Test099'
    }],
    methods: {
        result: function() {
            return 98
        }
    },
    body: function() {
        if (StressTest.Test099.meta.constructor != Joose.Meta.Class) {
            __global__.unSatisfiedDeps = true;
            throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test098";
        }
        if (StressTest.Test100.meta.constructor != Joose.Meta.Class) {
            __global__.unSatisfiedDeps = true;
            throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test098";
        }
    }
})