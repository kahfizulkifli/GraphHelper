const text = `
HloModule SyncTensorsGraph.142, input_output_alias={ {0}: (3, {}, must-alias), {1}: (2, {}, must-alias), {2}: (4, {}, must-alias), {3}: (1, {}, must-alias) }

%AddComputation.57 (x.58: f32[], y.59: f32[]) -> f32[] {
  %x.58 = f32[] parameter(0)
  %y.59 = f32[] parameter(1)
  ROOT %add.60 = f32[] add(f32[] %x.58, f32[] %y.59)
}

%AddComputation.86 (x.87: f32[], y.88: f32[]) -> f32[] {
  %x.87 = f32[] parameter(0)
  %y.88 = f32[] parameter(1)
  ROOT %add.89 = f32[] add(f32[] %x.87, f32[] %y.88)
}

%AddComputation.129 (x.130: f32[], y.131: f32[]) -> f32[] {
  %x.130 = f32[] parameter(0)
  %y.131 = f32[] parameter(1)
  ROOT %add.132 = f32[] add(f32[] %x.130, f32[] %y.131)
}

%AddComputation.135 (x.136: f32[], y.137: f32[]) -> f32[] {
  %x.136 = f32[] parameter(0)
  %y.137 = f32[] parameter(1)
  ROOT %add.138 = f32[] add(f32[] %x.136, f32[] %y.137)
}

ENTRY %SyncTensorsGraph.142 (p0.1: f32[], p1.6: s64[32], p2.7: f32[10], p3.15: f32[10,784], p4.24: f32[32,784]) -> (f32[10,784], f32[10], f32[32,784], s64[32], f32[32,10], /*index=5*/f32[], f32[10], f32[10,784]) {
  %p3.15 = f32[10,784]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p1.6 = s64[32]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=63}
  %broadcast.36 = s64[32,10]{1,0} broadcast(s64[32]{0} %p1.6), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.39 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.36, s64[32,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.34 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.41 = f32[32,10]{1,0} broadcast(f32[] %constant.34), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.33 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.40 = f32[32,10]{1,0} broadcast(f32[] %constant.33), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.42 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.39, f32[32,10]{1,0} %broadcast.41, f32[32,10]{1,0} %broadcast.40), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.43 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.42), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.46 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.47 = s64[32]{0} broadcast(s64[] %constant.46), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.48 = pred[32]{0} compare(s64[32]{0} %p1.6, s64[32]{0} %broadcast.47), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.49 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[32]{0} broadcast(f32[] %constant.49), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.51 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[32]{0} broadcast(f32[] %constant.51), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[32]{0} select(pred[32]{0} %compare.48, f32[32]{0} %broadcast.1, f32[32]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.55 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.4, f32[32,10]{1,0} %select.42), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.65 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.43, f32[32,10]{1,0} %multiply.55), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.56 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.61 = f32[] reduce(f32[32,10]{1,0} %multiply.55, f32[] %constant.56), dimensions={0,1}, to_apply=%AddComputation.57, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.63 = pred[] compare(f32[] %reduce.61, f32[] %constant.56), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.62 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.64 = f32[] select(pred[] %compare.63, f32[] %reduce.61, f32[] %constant.62), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.66 = f32[32,10]{1,0} broadcast(f32[] %select.64), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.67 = f32[32,10]{1,0} divide(f32[32,10]{1,0} %multiply.65, f32[32,10]{1,0} %broadcast.66), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p4.24 = f32[32,784]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=62}
  %transpose.68 = f32[784,32]{0,1} transpose(f32[32,784]{1,0} %p4.24), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[10,784]{0,1} dot(f32[32,10]{1,0} %divide.67, f32[784,32]{0,1} %transpose.68), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.4 = f32[10,784]{1,0} custom-call(f32[10,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.5 = f32[10,784]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.78 = f32[10,784]{1,0} multiply(f32[10,784]{1,0} %custom-call.4, f32[10,784]{1,0} %broadcast.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.79 = f32[10,784]{1,0} add(f32[10,784]{1,0} %p3.15, f32[10,784]{1,0} %multiply.78), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p2.7 = f32[10]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %constant.84 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.90 = f32[10]{0} reduce(f32[32,10]{1,0} %divide.67, f32[] %constant.84), dimensions={0}, to_apply=%AddComputation.86, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.5 = f32[10]{0} custom-call(f32[10]{0} %reduce.90), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.83 = f32[10]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.100 = f32[10]{0} multiply(f32[10]{0} %custom-call.5, f32[10]{0} %broadcast.83), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.101 = f32[10]{0} add(f32[10]{0} %p2.7, f32[10]{0} %multiply.100), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %custom-call.6 = f32[10,784]{1,0} custom-call(f32[10,784]{1,0} %p3.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.23 = f32[784,10]{0,1} transpose(f32[10,784]{1,0} %custom-call.6), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.25 = f32[32,10]{1,0} dot(f32[32,784]{1,0} %p4.24, f32[784,10]{0,1} %transpose.23), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.7 = f32[10]{0} custom-call(f32[10]{0} %p2.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.29 = f32[32,10]{1,0} broadcast(f32[10]{0} %custom-call.7), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.30 = f32[32,10]{1,0} add(f32[32,10]{1,0} %dot.25, f32[32,10]{1,0} %broadcast.29), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %broadcast.105 = s64[32,10]{1,0} broadcast(s64[32]{0} %p1.6), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.108 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.105, s64[32,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.103 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.110 = f32[32,10]{1,0} broadcast(f32[] %constant.103), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.102 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.109 = f32[32,10]{1,0} broadcast(f32[] %constant.102), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.111 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.108, f32[32,10]{1,0} %broadcast.110, f32[32,10]{1,0} %broadcast.109), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.114 = f32[32,10]{1,0} broadcast(f32[] %constant.103), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.115 = pred[32,10]{1,0} compare(f32[32,10]{1,0} %select.111, f32[32,10]{1,0} %broadcast.114), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.116 = f32[32,10]{1,0} broadcast(f32[] %constant.102), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.112 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.111), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.113 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.112, f32[32,10]{1,0} %add.30), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.117 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.115, f32[32,10]{1,0} %broadcast.116, f32[32,10]{1,0} %multiply.113), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.118 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.119 = s64[32]{0} broadcast(s64[] %constant.118), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.120 = pred[32]{0} compare(s64[32]{0} %p1.6, s64[32]{0} %broadcast.119), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.121 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.6 = f32[32]{0} broadcast(f32[] %constant.121), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.123 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.7 = f32[32]{0} broadcast(f32[] %constant.123), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[32]{0} select(pred[32]{0} %compare.120, f32[32]{0} %broadcast.6, f32[32]{0} %broadcast.7), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.8 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.127 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.8, f32[32,10]{1,0} %select.111), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.134 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %select.117, f32[32,10]{1,0} %multiply.127), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.139 = f32[] reduce(f32[32,10]{1,0} %multiply.134, f32[] %constant.102), dimensions={0,1}, to_apply=%AddComputation.135, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.128 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.133 = f32[] reduce(f32[32,10]{1,0} %multiply.127, f32[] %constant.128), dimensions={0,1}, to_apply=%AddComputation.129, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.140 = f32[] divide(f32[] %reduce.139, f32[] %reduce.133), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.141 = (f32[10,784]{1,0}, f32[10]{0}, f32[32,784]{1,0}, s64[32]{0}, f32[32,10]{1,0}, /*index=5*/f32[], f32[10]{0}, f32[10,784]{1,0}) tuple(f32[10,784]{1,0} %add.79, f32[10]{0} %add.101, f32[32,784]{1,0} %p4.24, s64[32]{0} %p1.6, f32[32,10]{1,0} %add.30, /*index=5*/f32[] %divide.140, f32[10]{0} %custom-call.5, f32[10,784]{1,0} %custom-call.4), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7"}
}


`
export default text;
